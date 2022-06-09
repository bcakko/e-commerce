import { CollectionState, FilterCollectionState, DetailState, UserState } from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
  detail: DetailState;
  user: UserState
}
