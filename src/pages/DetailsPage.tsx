import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../types/RootState.types";
import { GET_DETAIL_FETCH } from "../redux/actions/detailActions";
import NotFoundPage from "./NotFoundPage";

const DetailsPage = () => {
  const { mainCategory, id } = useParams();
  const dispatch = useDispatch();
  let isUrlValid = false;
  if (
    mainCategory === "tv" ||
    mainCategory === "movie" ||
    mainCategory === "person"
  ) {
    isUrlValid = true;
  }
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_FETCH,
      payload: {
        id,
        path: mainCategory,
      },
    });
  }, [dispatch, mainCategory, id]);
  const detail = useSelector((state: RootState) => state.detail.detail);
  console.log(detail);

  if (
    !isUrlValid ||
    (!("title" in detail) &&
      !("name" in detail && "profile_path" in detail) &&
      !("name" in detail && "poster_path" in detail))
  ) {
    return <NotFoundPage />;
  }

  if ("title" in detail) {
    // Movie Detail
    return (
      <div className="flex items-center justify-center mt-7 xs:w-full">
        {detail.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
            className="w-full xs:h-[400px] lg:h-[500px] object-cover brightness-50"
          />
        ) : (
          <img
            src={`https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
            className="w-full xs:h-[400px] lg:h-[500px] object-cover brightness-50"
          />
        )}
        <div className="xs:w-3/5 sm:w-3/5 xl:w-[729px] xl:h-[364px] absolute">
          {detail ? (
            <div className="w-full h-full flex bg-header-main-color shadow-2xl">
              <div className="xs:w-full xs:h-5/12 sm:w-1/3 sm:h-full">
                {detail.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="xs:w-full xs:h-7/12 sm:w-2/3 sm:h-full flex">
                <div className="flex flex-col h-full md:ml-5 xs:p-3 sm:p-0">
                  <span className="xs:text-xs md:text-xl lg:text-3xl sm:mb-2">
                    {detail.title}
                  </span>
                  <div className="xs:text-xs md:text-sm">
                    <span>Original title: </span>
                    <span>{detail.original_title}</span>
                  </div>

                  {detail.release_date ? (
                    <div className="xs:text-xs md:text-sm">
                      <span>Release Date: </span>
                      <span>{detail.release_date}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="xs:text-xs md:text-sm xs:mb-2 sm:mb-0 md:mb-2 lg:mb-2">
                    <span>User Vote: </span>
                    <span>{detail.vote_average}</span>
                  </div>
                  <div className="xs:hidden sm:block sm:text-xs lg:text-lg">
                    {detail.overview}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }

  // Person
  if ("name" in detail && "profile_path" in detail) {
    return (
      <div className="flex items-center justify-center mt-7 xs:w-full">
        <img
          src={`https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="xs:w-3/5 sm:w-3/5 xl:w-[729px] xl:h-[364px] absolute">
          {detail ? (
            <div className="w-full h-full flex bg-header-main-color shadow-2xl">
              <div className="xs:w-full xs:h-5/12 sm:w-1/3 sm:h-full">
                {detail.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${detail.profile_path}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="xs:w-full xs:h-7/12 sm:w-2/3 sm:h-full flex">
                <div className="flex flex-col h-full md:ml-5 xs:p-3 sm:p-0">
                  <span className="xs:text-xs md:text-xl lg:text-3xl sm:mb-2">
                    {detail.name}
                  </span>
                  <div className="xs:text-xs md:text-sm">
                    <span>Department: </span>
                    <span>{detail.known_for_department}</span>
                  </div>
                  <div className="xs:text-xs md:text-sm xs:mb-2 sm:mb-0 md:mb-2 lg:mb-2">
                    <span>Popularity: </span>
                    <span>{detail.popularity}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }

  // Show
  if ("name" in detail && "poster_path" in detail) {
    return (
      <div className="flex items-center justify-center mt-7 xs:w-full">
        {detail.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
            className="w-full xs:h-[400px] lg:h-[500px] object-cover brightness-50"
          />
        ) : (
          <img
            src={`https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
            className="w-full xs:h-[400px] lg:h-[500px] object-cover brightness-50"
          />
        )}
        <div className="xs:w-3/5 sm:w-3/5 xl:w-[729px] xl:h-[364px] absolute">
          {detail ? (
            <div className="w-full h-full flex bg-header-main-color shadow-2xl">
              <div className="xs:w-full xs:h-5/12 sm:w-1/3 sm:h-full">
                {detail.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={`http://cdn.onlinewebfonts.com/svg/img_546302.png`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="xs:w-full xs:h-7/12 sm:w-2/3 sm:h-full flex">
                <div className="flex flex-col h-full md:ml-5 xs:p-3 sm:p-0">
                  <span className="xs:text-xs md:text-xl lg:text-3xl sm:mb-2">
                    {detail.name}
                  </span>
                  <div className="xs:text-xs md:text-sm">
                    <span>Original title: </span>
                    <span>{detail.original_name}</span>
                  </div>

                  {detail.first_air_date ? (
                    <div className="xs:text-xs md:text-sm">
                      <span>First Air Date: </span>
                      <span>{detail.first_air_date}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="xs:text-xs md:text-sm xs:mb-2 sm:mb-0 md:mb-2 lg:mb-2">
                    <span>User Vote: </span>
                    <span>{detail.vote_average}</span>
                  </div>
                  <div className="xs:hidden sm:block sm:text-xs lg:text-lg">
                    {detail.overview}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default DetailsPage;
