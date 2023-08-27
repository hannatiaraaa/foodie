import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  RECIPES_SLICE,
  RecipesStateT,
  SearchRecipesI,
} from 'ExploreServices/constants/recipes.type';

export const initialState: RecipesStateT = {
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
      {payload}: PayloadAction<SearchRecipesI, string>,
    ) => {
      state.cachedRecipes.recipesList = payload.recipesList;
    },
    setLoadingRecipes: (state, {payload}: PayloadAction<SearchRecipesI>) => {
      state.cachedRecipes.isLoading = payload.isLoading;
    },
  },
});

export const {setSearchRecipes, setLoadingRecipes} = RecipesSlice.actions;

export default RecipesSlice.reducer;
