import ProductCard from "../../UI/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/RootState.types";

const ProductsList = () => {
  // const products = useSelector((state: RootState) => state.products.products);

  // return (
  //   <div>
  //     <div className="flex flex-wrap justify-center">
  //       {products.map((e) => (
  //         <ProductCard
  //           key={e.id}
  //           id={e.id}
  //           title={e.title}
  //           price={e.price}
  //           image={e.image}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default ProductsList;
