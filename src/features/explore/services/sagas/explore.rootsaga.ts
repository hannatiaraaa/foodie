import {all, takeLatest} from 'redux-saga/effects';
import {getSearchRecipesSaga} from './recipes.saga';
import {GET_SEARCH_RECIPES} from 'ExploreServices/constants/recipes.type';

export default function* ExploreSaga() {
  yield all([takeLatest(GET_SEARCH_RECIPES, getSearchRecipesSaga)]);
}
