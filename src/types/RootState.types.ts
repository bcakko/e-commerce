import {
  CollectionState,
  FilterCollectionState,
  DetailState,
  FavoritesState,
  UserState
} from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
  detail: DetailState;
  favorites: FavoritesState;
  user: UserState
}
