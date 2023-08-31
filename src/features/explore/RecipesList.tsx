import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';
import {RecipeCard} from './components/RecipeCard';

type Props = {
  data: TSearchRecipesItem[];
};

const RecipesList = ({data}: Props) => {
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
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.content}
      renderItem={({item: dataItem, index}) => {
        const item = {
          ...dataItem,
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
