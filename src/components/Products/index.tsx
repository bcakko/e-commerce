import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_PRODUCTS_FETCH",
    });
  }, [dispatch]);

  return (
    <div className="w-full xl:w-11/12 mx-auto">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
};

export default Products;
