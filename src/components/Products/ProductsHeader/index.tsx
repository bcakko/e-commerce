import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../types/RootState.types";
import ProductsFilter from "./ProductsFilter";
import ProductsResults from "./ProductsResults";

const ProductsHeader = () => {
  // let products = useSelector((state: RootState) => state.products.products);

  // const [sortedProducts, setSortedProducts] = useState(products);

  // const onFilterChangeHandler = (filterValue: string) => {
  //   if (filterValue === "default") return products;
  //   if (filterValue === "ascending")
  //     setSortedProducts(products.sort((e) => e.price));
  // };

  // return (
  //   <div className="flex justify-between px-5 pb-8">
  //     <ProductsResults count={products.length} />
  //     <ProductsFilter onFilterChange={onFilterChangeHandler} />
  //   </div>
  // );
};

export default ProductsHeader;
