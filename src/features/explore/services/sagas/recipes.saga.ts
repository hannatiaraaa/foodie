import {call, put} from 'redux-saga/effects';
import {
  setLoadingRecipes,
  setSearchRecipes,
} from 'ExploreServices/slices/recipes.slice';
import requestAPI from 'services/requestAPI';
import {SEARCH_RECIPES_ENDPOINT} from 'ExploreServices/constants/endpoint';

// types
import type {TGetSearchRecipesAction} from 'ExploreServices/constants/recipes.type';
import type {TApiResponse, TArgsSaga} from 'types/services';

type TSearchRecipesRes = Record<string, any> | undefined;

interface Args extends TArgsSaga {
  payload: TGetSearchRecipesAction;
}

export function* getSearchRecipesSaga({
  payload: {params},
  hasTriggerLoading,
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
      yield put(setSearchRecipes({recipesList: res.data?.results}));
    }
  } finally {
    if (!hasTriggerLoading) {
      yield put(setLoadingRecipes({isLoading: false}));
    }
  }
}
