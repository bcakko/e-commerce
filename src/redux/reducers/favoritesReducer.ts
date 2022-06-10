import { AnyAction } from "redux";
import { Movie } from "../../types/Movies.types";
import { Show } from "../../types/Shows.types";
import { FavoritesState } from "../../types/States.types";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favoritesActions";

const savedFavoritesJSON = localStorage.getItem("favorites");
const savedFavorites = savedFavoritesJSON ? JSON.parse(savedFavoritesJSON) : [];

const initialState: {
  favorites: (Movie | Show)[];
} = {
  favorites: savedFavorites,
};

const favoritesReducer = (
  state = initialState,
  action: AnyAction
): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const updatedFavorites = [...state.favorites];
      updatedFavorites.push(action.payload.production);

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };

    case REMOVE_FROM_FAVORITES:
      let newFavorites = [...state.favorites];
      newFavorites = newFavorites.filter((e) =>
        "title" in e
          ? e.title !== action.payload.production.title
          : e.name !== action.payload.production.name
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
