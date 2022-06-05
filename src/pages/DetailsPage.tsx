import { RootState } from "../types/RootState.types";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const detail = useSelector(
    (state: RootState) => state.detail.detail
  );

  // Movie Detail
  if("title" in detail){
    return <div className="w-2/3 h-2/3 mt-20 mb-20 m-auto flex justify-between shadow-2xl">
      {detail ? 
        <div className="w-full h-full flex xs:flex-col sm:flex-row">
          <div className="xs:w-full xs:h-5/12 sm:w-7/12 sm:h-full">
            {detail.poster_path ?
            <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} className="w-full h-full object-contain"/> 
            : 
            <img src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`} className="w-full h-full object-contain"/>
            }
          </div>
          <div className="xs:w-full xs:h-7/12 sm:w-5/12 sm:h-full flex">
            <div className="flex flex-col h-full sm:ml-8 lg:mt-10">
              <span className="xs:text-3xl sm:text-xl lg:text-3xl sm:mb-2">{detail.title}</span>
              <div className="text-sm sm:mb-2">
                <span className="xs:text-xs sm:text-sm">Original title: </span>
                <span>{detail.original_title}</span>
              </div>

              {detail.release_date ? 
              <div className="xs:text-xs sm:text-sm sm:mb-2">
                <span>Release Date: </span>
                <span>{detail.release_date}</span>
              </div>
              : "" }
              <div className="xs:text-xs sm:text-sm xs:mb-5 lg:mb-10">
                <span>User Vote: </span>
                <span>{detail.vote_average}</span>
              </div>
              <div className="xs:text-sm xs:mb-5 sm:text-xs lg:text-lg">
                {detail.overview}
              </div>
            </div>
          </div>
        </div> 
      : "Loading"}
    </div>
  }

  // Person
  if("name" in detail && "profile_path" in detail){
    return <div className="w-2/3 h-2/3 mt-20 mb-20 m-auto flex justify-between shadow-2xl">
    {detail ? 
      <div className="w-full h-full flex xs:flex-col sm:flex-row">
        <div className="xs:w-full xs:h-5/12 sm:w-7/12 sm:h-full">
          {detail.profile_path ?
          <img src={`https://image.tmdb.org/t/p/w500${detail.profile_path}`} className="w-full h-full object-contain"/> 
          : 
          <img src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`} className="w-full h-full object-contain"/>
          }
        </div>
        <div className="xs:w-full xs:h-7/12 sm:w-5/12 sm:h-full flex">
          <div className="flex flex-col h-full sm:ml-8 lg:mt-10">
            <span className="xs:text-3xl sm:text-xl lg:text-3xl sm:mb-2">{detail.name}</span>
            <div className="text-sm sm:mb-2">
              <span className="xs:text-xs sm:text-sm">Department: </span>
              <span>{detail.known_for_department}</span>
            </div>
            <div className="xs:text-xs sm:text-sm xs:mb-5 lg:mb-10">
              <span>Popularity: </span>
              <span>{detail.popularity}</span>
            </div>
          </div>
        </div>
      </div> 
    : "Loading"}
  </div>
  }

  // Show
  if("name" in detail && "poster_path" in detail){
    return <div className="w-2/3 h-2/3 mt-20 mb-20 m-auto flex justify-between shadow-2xl">
    {detail ? 
      <div className="w-full h-full flex xs:flex-col sm:flex-row">
        <div className="xs:w-full xs:h-5/12 sm:w-7/12 sm:h-full">
          {detail.poster_path ?
          <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} className="w-full h-full object-contain"/> 
          : 
          <img src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`} className="w-full h-full object-contain"/>
          }
        </div>
        <div className="xs:w-full xs:h-7/12 sm:w-5/12 sm:h-full flex">
          <div className="flex flex-col h-full sm:ml-8 lg:mt-10">
            <span className="xs:text-3xl sm:text-xl lg:text-3xl sm:mb-2">{detail.name}</span>
            <div className="text-sm sm:mb-2">
              <span className="xs:text-xs sm:text-sm">Original title: </span>
              <span>{detail.original_name}</span>
            </div>

            {detail.first_air_date ? 
            <div className="xs:text-xs sm:text-sm sm:mb-2">
              <span>Air Date: </span>
              <span>{detail.first_air_date}</span>
            </div>
            : "" }
            <div className="xs:text-xs sm:text-sm xs:mb-5 lg:mb-10">
              <span>User Vote: </span>
              <span>{detail.vote_average}</span>
            </div>
            <div className="xs:text-sm xs:mb-5 sm:text-xs lg:text-lg">
              {detail.overview}
            </div>
          </div>
        </div>
      </div> 
    : "Loading"}
  </div>
  }

  return <div></div>
};

export default DetailsPage;
