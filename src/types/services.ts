import {TRecipesState} from 'ExploreServices/constants/recipes.type';

export type TApiResponse<ResponseType> = {
  data?: ResponseType;
  status: number;
};

export type TIsLoading = {
  isLoading?: boolean;
};

export type TInitialState = {
  recipes: TRecipesState;
};

export type TArgsSaga = {
  type: string;
  hasTriggerLoading?: boolean;
};
