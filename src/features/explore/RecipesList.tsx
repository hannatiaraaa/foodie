import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';
import {RecipeCard} from './components/RecipeCard';

type Props = {
  data: TSearchRecipesItem[];
};

const RecipesList = ({data}: Props) => {
  if (data?.length > 0) {
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
        renderItem={RecipeCard}
      />
    );
  }
  return null;
};

export default RecipesList;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    width: '100%',
    padding: ms(16),
  },
});
