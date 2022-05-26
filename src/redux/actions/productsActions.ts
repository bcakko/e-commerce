import {
  FilteredFetchAction,
  FilteredSuccessAction,
  Products,
  ProductsFetchAction,
  ProductsSuccessAction,
} from "../../types/Products.types";

export const GET_PRODUCTS_FETCH = "GET_PRODUCTS_FETCH";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const GET_FILTERED_FETCH = "GET_FILTERED_FETCH";
export const GET_FILTERED_SUCCESS = "GET_FILTERED_SUCCESS";
export const GET_FILTERED_FAILURE = "GET_FILTERED_FAILURE";

export const productsFetchAction = (): ProductsFetchAction => {
  return {
    type: "GET_PRODUCTS_FETCH",
  };
};

export const productsSuccessAction = (
  param: Products[]
): ProductsSuccessAction => {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    payload: {
      products: param,
    },
  };
};

export const filteredFetchAction = (param: string): FilteredFetchAction => {
  return {
    type: "GET_FILTERED_FETCH",
    payload: {
      category: param,
    },
  };
};

export const filteredSuccessAction = (
  param: Products[]
): FilteredSuccessAction => {
  return {
    type: "GET_FILTERED_SUCCESS",
    payload: {
      filteredProducts: param,
    },
  };
};
