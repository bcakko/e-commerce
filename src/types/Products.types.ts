export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

export interface ProductsState {
  products: Products[];
  filteredProducts: Products[];
  isLoading: boolean;
}

export interface ProductsFetchAction {
  type: "GET_PRODUCTS_FETCH";
}

export interface ProductsSuccessAction {
  type: "GET_PRODUCTS_SUCCESS";
  payload: {
    products: Products[];
  };
}

export interface FilteredFetchAction {
  type: "GET_FILTERED_FETCH";
  payload: {
    category: string;
  };
}

export interface FilteredSuccessAction {
  type: "GET_FILTERED_SUCCESS";
  payload: {
    filteredProducts: Products[];
  };
}
