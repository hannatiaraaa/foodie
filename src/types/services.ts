import {RecipesStateT} from 'ExploreServices/constants/recipes.type';

export type APIResponseT<ResponseType> = {
  data?: ResponseType;
  status: number;
};

export type IsLoadingT = {
  isLoading?: boolean;
};

export type InitialStateT = {};

export type ArgsSagaT = {
  type: string;
  hasTriggerLoading?: boolean;
};
