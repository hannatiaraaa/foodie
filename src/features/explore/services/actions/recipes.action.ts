import {createAction} from '@reduxjs/toolkit';
import {
  GET_SEARCH_RECIPES,
  GetSearchRecipesActionT,
} from 'ExploreServices/constants/recipes.type';

export const getSearchRecipes =
  createAction<GetSearchRecipesActionT>(GET_SEARCH_RECIPES);
