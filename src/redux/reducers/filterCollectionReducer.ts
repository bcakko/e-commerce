import {
  FILTER_COLLECTION_FETCH,
  FILTER_COLLECTION_SUCCESS,
} from "../actions/filterCollectionActions";
import { AnyAction } from "redux";
import { FilterCollectionState } from "../../types/States.types";

const initialState: FilterCollectionState = {
  collection: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  isLoading: false,
};

const filterCollectionReducer = (
  state = initialState,
  action: AnyAction
): FilterCollectionState => {
  switch (action.type) {
    case FILTER_COLLECTION_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case FILTER_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collection: action.payload.collection,
      };
    default:
      return state;
  }
};

export default filterCollectionReducer;
