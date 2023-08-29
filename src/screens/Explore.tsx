import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RecipesList from 'Explore/RecipesList';
import {useAppDispatch, useAppSelector} from 'hooks/useRedux';
import {getSearchRecipes} from 'ExploreServices/actions/recipes.action';
import type {TRecipesState} from 'Explore/services/constants/recipes.type';
import {COLOR} from 'configs/colors';

const Explore = () => {
  const dispatch = useAppDispatch();
  const {cachedRecipes} = useAppSelector<TRecipesState>('recipes');
  const {recipesList} = cachedRecipes;
  const dispatchSearchRecipes = useCallback(() => {
    dispatch(
      getSearchRecipes({
        params: {sort: 'popularity', addRecipeInformation: true, number: 5},
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    dispatchSearchRecipes();
  }, [dispatchSearchRecipes]);

  return (
    <SafeAreaView style={styles.container}>
      <RecipesList data={recipesList} />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.DARK_BACKGROUND,
  },
});
