import { RootState } from "../types/RootState.types";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const detail = useSelector(
    (state: RootState) => state.detail.detail.results
  );

  console.log(detail)

  // if("title" in detail.results[0])
  // return <div>
  //   {detail.results[0] ? 
  //   <div>
  //     {detail.results[0].title}
  //   </div> : ""}
  // </div>

  return<div></div>
};

export default DetailsPage;
