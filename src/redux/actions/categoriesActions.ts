import {
  CategoriesFetchAction,
  CategoriesSuccessAction,
  Categories,
} from "./../../types/Categories.types";
export const GET_CATEGORIES_FETCH = "GET_CATEGORIES_FETCH";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const categoriesFetchAction = (): CategoriesFetchAction => {
  return {
    type: GET_CATEGORIES_FETCH,
  };
};

export const categoriesSuccessAction = (
  param: Categories
): CategoriesSuccessAction => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: {
      categories: param,
    },
  };
};
