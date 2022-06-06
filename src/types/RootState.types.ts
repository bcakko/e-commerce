import { CollectionState, FilterCollectionState, DetailState } from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
  detail: DetailState;
}