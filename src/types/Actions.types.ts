import { addToFavoritesAction } from "./../redux/actions/favoritesActions";
import { FilterParamType } from "../redux/actions/filterCollectionActions";
import { Movies, Movie } from "./Movies.types";
import { Shows, Show } from "./Shows.types";
import { People, Person } from "./People.types";
import { User } from "./UserType";

export interface CollectionFetchAction {
  type: "GET_COLLECTION_FETCH";
  payload: {
    mainCategory: "tv" | "movie" | string;
    subCategory:
      | "popular"
      | "top_rated"
      | "on_the_air"
      | "upcoming"
      | string
      | null;
    page: number;
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

export interface DetailFetchAction {
  type: "GET_DETAIL_FETCH";
  payload: {
    id: string;
    path: string;
  };
}

export interface DetailFetchActionSuccess {
  type: "GET_DETAIL_SUCCESS";
  payload: {
    detail: Movie | Show | Person;
  };
}

export interface AddToFavoritesAction {
  type: "ADD_TO_FAVORITES";
  payload: {
    production: Movie | Show;
  };
}

export interface RemoveFromFavoritesAction {
  type: "REMOVE_FROM_FAVORITES";
  payload: {
    production: Movie | Show;
  };
}

export interface LogUserInAction {
  type: "LOG_USER_IN";
  payload: {
    id: string
  }
}

export interface LogUserInSuccessAction {
  type: "LOG_USER_IN_SUCCESS";
  payload: {
    user: User
  }
}

export interface LogUserOutAction {
  type: "LOG_USER_OUT";
}