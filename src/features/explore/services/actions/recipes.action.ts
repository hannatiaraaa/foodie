import {createAction} from '@reduxjs/toolkit';
import {
  GET_SEARCH_RECIPES,
  type TGetSearchRecipesAction,
} from 'ExploreServices/constants/recipes.type';

export const getSearchRecipes =
  createAction<TGetSearchRecipesAction>(GET_SEARCH_RECIPES);
