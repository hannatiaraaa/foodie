import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  RECIPES_SLICE,
  TRecipesState,
  ISearchRecipes,
} from 'ExploreServices/constants/recipes.type';

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
    setLoadingRecipes: (state, {payload}: PayloadAction<ISearchRecipes>) => {
      state.cachedRecipes.isLoading = payload.isLoading;
    },
  },
});

export const {setSearchRecipes, setLoadingRecipes} = RecipesSlice.actions;

export default RecipesSlice.reducer;
