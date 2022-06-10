import {
  AddToFavoritesAction,
  RemoveFromFavoritesAction,
} from "../../types/Actions.types";
import { Movie } from "../../types/Movies.types";
import { Show } from "../../types/Shows.types";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavoritesAction = (
  production: Movie | Show
): AddToFavoritesAction => {
  return {
    type: ADD_TO_FAVORITES,
    payload: {
      production,
    },
  };
};

export const removeFromFavoritesAction = (
  production: Movie | Show
): RemoveFromFavoritesAction => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: {
      production,
    },
  };
};
