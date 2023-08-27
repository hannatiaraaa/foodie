import {IsLoadingT} from 'types/services';

export const RECIPES_SLICE = 'Recipes';
export const GET_SEARCH_RECIPES = `${RECIPES_SLICE}/getSearchRecipes`;
export const SET_SEARCH_RECIPES = `${RECIPES_SLICE}/setSearchRecipes`;

export type SearchRecipesItemT = {
  title?: string;
  image?: string;
  aggregateLikes?: number;
  readyInMinutes?: number;
  healthScore?: number;
  dishTypes?: string[];
};

export interface SearchRecipesI extends IsLoadingT {
  recipesList?: SearchRecipesItemT[];
}

export type RecipesStateT = {
  cachedRecipes: SearchRecipesI;
};

export type SearchRecipesParamsT = {
  number?: number;
  query?: string;
  sort?: string;
  cuisine?: string;
  diet?: string;
  intolerances?: string;
  type?: string;
  instructionsRequired?: boolean;
  fillIngredients?: boolean;
  addRecipeInformation?: boolean;
  addRecipeNutrition?: boolean;
  maxReadyTime?: number;
};

export type GetSearchRecipesActionT = {
  params?: SearchRecipesParamsT;
};
