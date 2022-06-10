import { FilterParamType } from "../redux/actions/filterCollectionActions";
import { Movies, Movie } from "./Movies.types";
import { Shows, Show } from "./Shows.types";
import { People, Person } from "./People.types";

export interface CollectionState {
  collection: {
    movies: Movies;
    shows: Shows;
  };
  isLoading: boolean;
}

export interface FilterCollectionState {
  collection: FilterParamType;
  isLoading: boolean;
}

export interface DetailState {
  detail: Movie | Show | Person;
  isLoading: boolean;
}

export interface FavoritesState {
  favorites: (Movie | Show)[];
}
