import {
  GET_PRODUCTS_SUCCESS,
  GET_FILTERED_FETCH,
  GET_FILTERED_SUCCESS,
} from "./../actions/productsActions";
import { AnyAction } from "redux";
const initialState = {
  products: [],
  filteredProducts: [],
  selectedCategory: "",
  isLoading: false,
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };

    case GET_FILTERED_SUCCESS:
      return {
        ...state,
        filteredProducts: action.payload.filteredProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
