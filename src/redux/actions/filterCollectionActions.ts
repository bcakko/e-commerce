import {
  FilterCollectionFetchAction,
  FilterCollectionSuccessAction,
} from "../../types/Actions.types";

import { Movie, Movies } from "../../types/Movies.types";
import { People, Person } from "../../types/People.types";
import { Show, Shows } from "../../types/Shows.types";
export const FILTER_COLLECTION_FETCH = "FILTER_COLLECTION_FETCH";
export const FILTER_COLLECTION_SUCCESS = "FILTER_COLLECTION_SUCCESS";
export const FILTER_COLLECTION_FAILURE = "FILTER_COLLECTION_FAILURE";

export const filterCollectionFetchAction = (
  inputText: string
): FilterCollectionFetchAction => {
  return {
    type: FILTER_COLLECTION_FETCH,
    payload: {
      inputText,
    },
  };
};

export interface FilterParamType {
  page: number;
  results: (Person | Show | Movie)[];
  total_pages: number;
  total_results: number;
}

export const filterCollectionSuccessAction = (
  param: FilterParamType
): FilterCollectionSuccessAction => {
  return {
    type: FILTER_COLLECTION_SUCCESS,
    payload: {
      collection: param,
    },
  };
};
