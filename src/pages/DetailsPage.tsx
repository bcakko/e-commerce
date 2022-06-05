import { RootState } from "../types/RootState.types";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const detail = useSelector(
    (state: RootState) => state.detail.detail
  );

  console.log(detail)

  if("title" in detail){
    return <div className="w-2/3 h-96 m-auto flex justify-between border border-side-color">
      {detail ? 
        <div className="w-full h-full flex">
          <div className="w-2/3 h-full">
            <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} className="w-full h-full object-cover"/>
          </div>
          <div className="w-1/3 h-full flex flex-col">
            <span>{detail.title}</span>
            <span>{detail.original_title}</span>
            <div>
              <span>Release Date: </span>
              <span>{detail.release_date}</span>
            </div>
            <div>
              <span>User Vote: </span>
              <span>{detail.vote_average}</span>
            </div>
          </div>
        </div> 
      : ""}
    </div>
  }

  if("name" in detail && "profile_path" in detail){
    return <div>
      {detail ? 
        <div>
          {detail.name}
        </div> 
      : ""}
    </div>
  }

  if("name" in detail && "poster_path" in detail){
    return <div>
      {detail ? 
        <div>
          {detail.name}
        </div>
      : ""}
    </div>
  }

  return <div></div>
};

export default DetailsPage;
