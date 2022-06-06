import {
  GET_COLLECTION_FETCH,
  GET_COLLECTION_SUCCESS,
} from "../actions/collectionActions";
import { AnyAction } from "redux";
import { CollectionState } from "../../types/States.types";
const initialState: CollectionState = {
  collection: {
    movies: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    shows: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
  },
  isLoading: false,
};

const collectionReducer = (
  state = initialState,
  action: AnyAction
): CollectionState => {
  switch (action.type) {
    case GET_COLLECTION_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COLLECTION_SUCCESS:
      if (!action.payload.collection.results[0].first_air_date) {
        return {
          ...state,
          isLoading: false,
          collection: {
            ...state.collection,
            movies: action.payload.collection,
          },
        };
      } else {
        return {
          ...state,
          isLoading: false,
          collection: {
            ...state.collection,
            shows: action.payload.collection,
          },
        };
      }

    default:
      return state;
  }
};

export default collectionReducer;
