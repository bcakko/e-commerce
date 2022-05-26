import { useDispatch, useSelector } from "react-redux";
import {
  GET_FILTERED_FETCH,
  GET_PRODUCTS_FETCH,
} from "../redux/actions/productsActions";
import { RootState } from "../types/RootState.types";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const filtered = useSelector((state: any) => state.products.filteredProducts);


  const clickHandler = () => {
    dispatch({
      type: GET_FILTERED_FETCH,
      payload: { category: "jewelery" },
    });
  };

  console.log(filtered);

  return (
    <div>
      {/* {products.length !== 0 ? products.map((e: any) => e.title) : "loading"} */}
      <button onClick={clickHandler}>FETCH FILTERED</button>
      {filtered.length !== 0 ? filtered.map((e: any) => e.title) : "loading"}
    </div>
  );
};

export default HomePage;
