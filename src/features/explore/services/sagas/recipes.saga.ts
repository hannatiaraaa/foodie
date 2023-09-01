import {call, put} from 'redux-saga/effects';
import {
  setLoadingRecipes,
  setSearchRecipes,
} from 'ExploreServices/slices/recipes.slice';
import requestAPI from 'services/requestAPI';
import {SEARCH_RECIPES_ENDPOINT} from 'ExploreServices/constants/endpoint';

// types
import type {
  TGetSearchRecipesAction,
  TSearchRecipesRes,
} from 'ExploreServices/constants/recipes.type';
import type {TApiResponse, TArgsSaga} from 'types/services';

interface Args extends TArgsSaga {
  payload: TGetSearchRecipesAction;
}

export function* getSearchRecipesSaga({
  payload: {hasTriggerLoading, isCached, params, callbackFn},
}: Args) {
  try {
    if (!hasTriggerLoading) {
      yield put(setLoadingRecipes({isLoading: true}));
    }

    const res: TApiResponse<TSearchRecipesRes> = yield call(
      requestAPI<TSearchRecipesRes>,
      {
        method: 'GET',
        endpoint: SEARCH_RECIPES_ENDPOINT,
        params,
      },
    );

    if (res?.status === 200) {
      if (res.data) {
        const {results, number, totalResults} = res.data;
        if (isCached) {
          yield put(
            setSearchRecipes({
              recipesList: results,
              number,
              total: totalResults,
            }),
          );
        } else {
          yield put(setSearchRecipes({number, total: totalResults}));
          if (callbackFn) {
            yield callbackFn(results);
          }
        }
      }
    }
  } finally {
    if (!hasTriggerLoading) {
      yield put(setLoadingRecipes({isLoading: false}));
    }
  }
}
