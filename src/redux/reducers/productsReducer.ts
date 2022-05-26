import {
  GET_PRODUCTS_SUCCESS,
  GET_FILTERED_SUCCESS,
} from "./../actions/productsActions";
import { AnyAction } from "redux";
import { ProductsState } from "../../types/Products.types";
const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
};

const productsReducer = (
  state = initialState,
  action: AnyAction
): ProductsState => {
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
