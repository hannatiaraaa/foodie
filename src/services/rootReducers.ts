import {combineReducers} from '@reduxjs/toolkit';
import recipes from 'ExploreServices/slices/recipes.slice';

const rootReducers = combineReducers({
  recipes,
});

export default rootReducers;
