import {createAction} from '@reduxjs/toolkit';
import {
  GET_SEARCH_RECIPES,
  TGetSearchRecipesAction,
} from 'ExploreServices/constants/recipes.type';

export const getSearchRecipes =
  createAction<TGetSearchRecipesAction>(GET_SEARCH_RECIPES);
