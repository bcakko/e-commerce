import { CategoriesState } from "./Categories.types";
import { ProductsState } from "./Products.types";

export interface RootState {
  products: ProductsState;
  categories: CategoriesState;
}
