import { FilterParamType } from "../redux/actions/filterCollectionActions";
import { Movies } from "./Movies.types";
import { Shows } from "./Shows.types";

export interface CollectionState {
  collection: {
    movies: Movies | {};
    shows: Shows | {};
  };
  isLoading: boolean;
}

export interface FilterCollectionState {
  collection: FilterParamType | {};
  isLoading: boolean;
}
