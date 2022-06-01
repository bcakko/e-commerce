import { FilterParamType } from "../redux/actions/filterCollectionActions";
import { Movies } from "./Movies.types";
import { Shows } from "./Shows.types";

export interface CollectionFetchAction {
  type: "GET_COLLECTION_FETCH";
  payload: {
    mainCategory: "tv" | "movie";
    subCategory: "popular" | "top_rated" | "on_the_air" | "upcoming";
  };
}

export interface CollectionSuccessAction {
  type: "GET_COLLECTION_SUCCESS";
  payload: {
    collection: Movies | Shows;
  };
}

export interface FilterCollectionFetchAction {
  type: "FILTER_COLLECTION_FETCH";
  payload: {
    inputText: string;
  };
}

export interface FilterCollectionSuccessAction {
  type: "FILTER_COLLECTION_SUCCESS";
  payload: {
    collection: FilterParamType;
  };
}
