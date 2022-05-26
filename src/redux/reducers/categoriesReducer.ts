import { GET_CATEGORIES_SUCCESS } from "./../actions/categoriesActions";
import { AnyAction } from "redux";

const initialState = {
  categories: [],
  isLoading: false,
};

const categoriesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
