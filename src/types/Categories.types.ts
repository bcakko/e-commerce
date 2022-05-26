export type Categories = string[];

export interface CategoriesState {
  categories: Categories;
  isLoading: boolean;
}

export interface CategoriesFetchAction {
  type: "GET_CATEGORIES_FETCH";
}

export interface CategoriesSuccessAction {
  type: "GET_CATEGORIES_SUCCESS";
  payload: {
    categories: Categories;
  };
}
