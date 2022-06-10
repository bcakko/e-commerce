import {
  CollectionState,
  FilterCollectionState,
  DetailState,
  FavoritesState,
} from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
  detail: DetailState;
  favorites: FavoritesState;
}
