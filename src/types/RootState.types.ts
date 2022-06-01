import { CollectionState, FilterCollectionState } from "./States.types";

export interface RootState {
  collection: CollectionState;
  filterCollection: FilterCollectionState;
}
