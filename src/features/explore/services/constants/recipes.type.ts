import type {TIsLoading} from 'types/services.type';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';

export const RECIPES_SLICE = 'Recipes';
export const GET_SEARCH_RECIPES = `${RECIPES_SLICE}/getSearchRecipes`;
export const SET_SEARCH_RECIPES = `${RECIPES_SLICE}/setSearchRecipes`;

export interface ISearchRecipes extends TIsLoading {
  recipesList?: TSearchRecipesItem[];
  number: number;
  total: number;
}

export type TRecipesState = {
  cachedRecipes: ISearchRecipes;
};

export type TSearchRecipesParams = {
  number?: number;
  query?: string;
  sort?: string;
  sortDirection?: 'asc' | 'desc';
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

export type TSearchRecipesRes = Record<string, any> | undefined;

export type TGetSearchRecipesAction = {
  hasTriggerLoading?: boolean;
  isCached?: boolean;
  params?: TSearchRecipesParams;
  callbackFn?: (val?: TSearchRecipesItem[]) => void;
};
