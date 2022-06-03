import { RootState } from "../types/RootState.types";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const detail = useSelector(
    (state: RootState) => state.detail.detail
  );

  console.log(detail)

  if("title" in detail){
    return <div>
      {detail ? 
      <div>
        {detail.title}
      </div> : ""}
    </div>
  }

  if("name" in detail && "profile_path" in detail){
    return <div>
      {detail ? <div>
        {detail.name}
      </div> : ""}
    </div>
  }

  if("name" in detail && "poster_path" in detail){
    return <div>
      {detail ? <div>
        {detail.name}
      </div> : ""}
    </div>
  }

  return <div></div>
};

export default DetailsPage;
