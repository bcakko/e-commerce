import { useState } from "react";
import { Products } from "../../../types/Products.types";

const ProductsFilter = (props: {
  onFilterChange: (filterValue: string) => Products[] | undefined;
}) => {
  const [filterValue, setFilterValue] = useState("default");

  const filterChangeHandler = (event: any) => {
    console.log(event.target.value);
    setFilterValue(event.target.value);
    props.onFilterChange(filterValue);
  };

  return (
    <div>
      <select onChange={filterChangeHandler}>
        <option value="default">Önerilen</option>
        <option value="ascending">En düşük fiyat</option>
        <option value="descending">En yüksek fiyat</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
