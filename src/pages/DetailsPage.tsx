import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../types/RootState.types";
import { GET_DETAIL_FETCH } from "../redux/actions/detailActions";
import NotFoundPage from "./NotFoundPage";
import CollectionImage from "../components/UI/CollectionImage";
import CollectionCard from "../components/UI/CollectionCard";
import { Movie } from "../types/Movies.types";
import { Show } from "../types/Shows.types";
import { Root } from "react-dom/client";
import Modal from "../components/UI/Modal";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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

  const isLoading = useSelector((state: RootState) => state.detail.isLoading);

  if (
    !isUrlValid ||
    (!("title" in detail) &&
      !("name" in detail && "profile_path" in detail) &&
      !("name" in detail && "poster_path" in detail))
  ) {
    return <NotFoundPage />;
  }

  if (isLoading) {
    return (
      <Modal onClose={() => {}}>
        <LoadingSpinner />
      </Modal>
    );
  }

  const detailInfoMap: {
    title: string;
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string | null;
    production: Movie | Show | undefined;
    type: "movie" | "tv" | undefined;
  } = {
    title: "title" in detail ? detail.title : detail.name,
    original_title:
      "title" in detail
        ? detail.original_title
        : "first_air_date" in detail
        ? detail.original_name
        : "",
    release_date:
      "title" in detail
        ? detail.release_date
        : "first_air_date" in detail
        ? detail.first_air_date
        : "",
    overview:
      "title" in detail
        ? detail.overview
        : "first_air_date" in detail
        ? detail.overview
        : detail.biography,
    poster_path:
      "title" in detail
        ? detail.poster_path
        : "first_air_date" in detail
        ? detail.poster_path
        : detail.profile_path,
    backdrop_path:
      "title" in detail
        ? detail.backdrop_path
        : "first_air_date" in detail
        ? detail.backdrop_path
        : null,
    production:
      "title" in detail || "first_air_date" in detail ? detail : undefined,
    type:
      "title" in detail
        ? "movie"
        : "first_air_date" in detail
        ? "tv"
        : undefined,
  };

  return (
    <div>
      <div className="flex flex-col justify-end h-[200px] sm:h-[400px] relative text-header-main-color">
        {detailInfoMap.backdrop_path ? (
          <CollectionImage
            url={detailInfoMap.backdrop_path}
            className="absolute top-0 w-full h-full object-cover -z-20 brightness-[60%] blur-[1px]"
          />
        ) : (
          <img
            src="https://media.gq.com/photos/5de957b84e7a380009b83958/master/pass/Best-TV-Shows-of-2019GQ-2019-120319.jpg"
            alt="posteers-of-random-movies"
            className="absolute top-0 w-full h-full object-cover -z-20 brightness-[60%] blur-[1px]"
          />
        )}
        <p className="text-4xl px-5">{detailInfoMap.title} </p>
        <span className="text-sm px-5 py-5">
          {detailInfoMap.title !== detailInfoMap.original_title &&
            detailInfoMap.original_title}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full ">
        <div className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-2/6 order-2 sm:order-1">
          <CollectionCard
            id={detail.id}
            title={detailInfoMap.title}
            imageUrl={detailInfoMap.poster_path}
            rating={
              !("known_for_department" in detail)
                ? detail.vote_average
                : undefined
            }
            type={detailInfoMap.type}
            production={detailInfoMap.production}
          />
        </div>
        <p className="w-full sm:w-2/3 md:w-3/4 lg:w-4/6 p-2 indent-10 order-1 sm:order-2">
          {detailInfoMap.overview}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
