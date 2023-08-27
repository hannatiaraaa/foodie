import {call, put} from 'redux-saga/effects';
import {
  setLoadingRecipes,
  setSearchRecipes,
} from 'ExploreServices/slices/recipes.slice';
import requestAPI from 'services/requestAPI';
import {APIResponseT, ArgsSagaT} from 'types/services';
import {SEARCH_RECIPES_ENDPOINT} from 'ExploreServices/constants/endpoint';
import {GetSearchRecipesActionT} from 'ExploreServices/constants/recipes.type';

type SearchRecipesResT = Record<string, any> | undefined;

interface ArgsT extends ArgsSagaT {
  payload: GetSearchRecipesActionT;
}

export function* getSearchRecipesSaga({
  payload: {params},
  hasTriggerLoading,
}: ArgsT) {
  try {
    if (!hasTriggerLoading) {
      yield put(setLoadingRecipes({isLoading: true}));
    }

    const res: APIResponseT<SearchRecipesResT> = yield call(
      requestAPI<SearchRecipesResT>,
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
