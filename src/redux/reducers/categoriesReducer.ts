import { GET_CATEGORIES_SUCCESS } from "./../actions/categoriesActions";
import { AnyAction } from "redux";
import { CategoriesState } from "../../types/Categories.types";

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
};

const categoriesReducer = (
  state = initialState,
  action: AnyAction
): CategoriesState => {
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
