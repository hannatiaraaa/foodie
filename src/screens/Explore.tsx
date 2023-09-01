import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'hooks/useRedux';

// component
import {ContainerWrapper} from 'components/ContainerWrapper';
import {RefreshLoader} from 'components/Loader';

// services
import {getSearchRecipes} from 'ExploreServices/actions/recipes.action';
import type {
  TGetSearchRecipesAction,
  TRecipesState,
} from 'Explore/services/constants/recipes.type';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';

// features
import RecipesList from 'Explore/RecipesList';
import {scale} from 'react-native-size-matters';

type TRecipesListFooter = {
  isLoadedNewRecipes: boolean;
};

type TOnEndReachedInfo = {distanceFromEnd: number};

const RecipesListFooter = ({isLoadedNewRecipes}: TRecipesListFooter) => {
  if (isLoadedNewRecipes) {
    return <RefreshLoader />;
  }
  return <View style={styles.recipesListFooter} />;
};

const Explore = () => {
  const dispatch = useAppDispatch();
  const {cachedRecipes} = useAppSelector<TRecipesState>('recipes');
  const {recipesList = [], number, total} = cachedRecipes;
  const isLoading = cachedRecipes.isLoading;

  const [displayedRecipes, setDisplayedRecipes] = useState<
    TSearchRecipesItem[]
  >([]);
  const numberOfNewRecipes = 7;

  const dispatchSearchRecipes = useCallback(
    (limit: number, {...payload}: TGetSearchRecipesAction) => {
      dispatch(
        getSearchRecipes({
          params: {
            sort: 'meta-score',
            addRecipeInformation: true,
            number: limit,
          },
          ...payload,
        }),
      );
    },
    [dispatch],
  );

  const handleDisplayedRecipes = useCallback(() => {
    if (!isLoading && recipesList.length > 0) {
      setDisplayedRecipes([...recipesList]);
    }
  }, [recipesList, isLoading]);

  useEffect(() => {
    dispatchSearchRecipes(numberOfNewRecipes, {isCached: true});
  }, [dispatchSearchRecipes]);

  useEffect(() => {
    handleDisplayedRecipes();
  }, [handleDisplayedRecipes]);

  const RenderRecipesList = useMemo(() => {
    const isLoadedNewRecipes = !isLoading && number < total;

    const onEndReached = ({distanceFromEnd}: TOnEndReachedInfo) => {
      if (distanceFromEnd < 10 && isLoadedNewRecipes) {
        dispatchSearchRecipes(number + numberOfNewRecipes, {
          hasTriggerLoading: true,
          callbackFn: res => {
            if (res) {
              setDisplayedRecipes(res);
            }
          },
        });
      }
    };

    return (
      <RecipesList
        data={displayedRecipes}
        isLoading={isLoading}
        onEndReached={onEndReached}
        ListFooterComponent={() => RecipesListFooter({isLoadedNewRecipes})}
      />
    );
  }, [displayedRecipes, isLoading, number, total, dispatchSearchRecipes]);

  return <ContainerWrapper isSafeArea>{RenderRecipesList}</ContainerWrapper>;
};

export default Explore;

const styles = StyleSheet.create({
  recipesListFooter: {
    height: scale(20),
  },
});
