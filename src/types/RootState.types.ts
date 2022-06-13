import {
  CollectionState,
  FilterCollectionState,
  DetailState,
  FavoritesState,
  UserState,
  NotifierState
} from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
  detail: DetailState;
  favorites: FavoritesState;
  user: UserState;
  notifier: NotifierState
}
