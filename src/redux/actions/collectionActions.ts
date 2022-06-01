import {
  CollectionFetchAction,
  CollectionSuccessAction,
} from "../../types/Actions.types";
import { Movies } from "../../types/Movies.types";
import { Shows } from "../../types/Shows.types";

export const GET_COLLECTION_FETCH = "GET_COLLECTION_FETCH";
export const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
export const GET_COLLECTION_FAILURE = "GET_COLLECTION_FAILURE";

export const collectionFetchAction = (
  mainCategory: "tv" | "movie",
  subCategory: "popular" | "top_rated" | "on_the_air" | "upcoming"
): CollectionFetchAction => {
  return {
    type: "GET_COLLECTION_FETCH",
    payload: {
      mainCategory,
      subCategory,
    },
  };
};

export const collectionSuccessAction = (
  param: Movies | Shows
): CollectionSuccessAction => {
  return {
    type: "GET_COLLECTION_SUCCESS",
    payload: {
      collection: param,
    },
  };
};
