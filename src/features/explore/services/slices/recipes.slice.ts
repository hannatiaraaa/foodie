import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  type TRecipesState,
  type ISearchRecipes,
  RECIPES_SLICE,
} from 'ExploreServices/constants/recipes.type';
import type {TIsLoading} from 'types/services';

export const initialState: TRecipesState = {
  cachedRecipes: {
    recipesList: [],
    isLoading: false,
  },
};

const RecipesSlice = createSlice({
  name: RECIPES_SLICE,
  initialState,
  reducers: {
    setSearchRecipes: (
      state,
      {payload}: PayloadAction<ISearchRecipes, string>,
    ) => {
      state.cachedRecipes.recipesList = payload.recipesList;
    },
    setLoadingRecipes: (state, {payload}: PayloadAction<TIsLoading>) => {
      state.cachedRecipes.isLoading = payload.isLoading;
    },
  },
});

export const {setSearchRecipes, setLoadingRecipes} = RecipesSlice.actions;

export default RecipesSlice.reducer;
