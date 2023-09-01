import React, {useState} from 'react';
import {FlatList, type FlatListProps, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';
import {RecipeCard} from './components/RecipeCard';
import type {TIsLoading} from 'types/services.type';

interface Props
  extends Omit<FlatListProps<TSearchRecipesItem>, 'renderItem'>,
    TIsLoading {
  data: TSearchRecipesItem[];
}

const RecipesList = ({
  data,
  isLoading,
  onEndReached,
  ListFooterComponent,
}: Props) => {
  const [likes, setLikes] = useState<boolean[]>(
    new Array(data.length).fill(false),
  );

  const handleLikePress = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !likes[index];
    setLikes(updatedLikes);
  };

  if (data.length <= 0) {
    return null;
  }

  return (
    <FlatList
      data={data}
      onEndReached={onEndReached}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.content}
      ListFooterComponent={ListFooterComponent}
      renderItem={({item: dataItem, index}) => {
        const item = {
          ...dataItem,
          isLoading,
          like: likes[index],
          onLikePress: () => handleLikePress(index),
        };

        return RecipeCard({item, index});
      }}
    />
  );
};

export default RecipesList;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    width: '100%',
    padding: ms(16),
    gap: ms(24),
  },
});
