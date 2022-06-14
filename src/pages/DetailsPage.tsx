import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { RootState } from "../types/RootState.types";
import { Movie } from "../types/Movies.types";
import { Show } from "../types/Shows.types";

import { GET_DETAIL_FETCH } from "../redux/actions/detailActions";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../redux/actions/favoritesActions";
import { showNotifier } from "../redux/actions/notifierActions";

import NotFoundPage from "./NotFoundPage";
import CollectionImage from "../components/UI/CollectionImage";
import CollectionCard from "../components/UI/CollectionCard";
import Modal from "../components/UI/Modal";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import FavoriteIcon from "../components/UI/FavoriteIcon";

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
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
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
    release_date: string | null;
    overview: string;
    poster_path: string;
    backdrop_path: string | null;
    genres: { id: number; name: string }[] | undefined;
    known_for_department: string | undefined;
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
        : null,
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
    genres:
      "title" in detail || "first_air_date" in detail
        ? detail.genres
        : undefined,

    known_for_department:
      !("title" in detail) && !("first_air_date" in detail)
        ? detail.known_for_department
        : undefined,
    production:
      "title" in detail || "first_air_date" in detail ? detail : undefined,
    type:
      "title" in detail
        ? "movie"
        : "first_air_date" in detail
        ? "tv"
        : undefined,
  };
  const isFavorite = favorites.some(
    (e) => detailInfoMap.poster_path === e.poster_path
  );
  const onFavoriteHandler = () => {
    if (detailInfoMap.production) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction(detailInfoMap.production));
        dispatch(showNotifier("removed from favorites!"));
      } else {
        dispatch(addToFavoritesAction(detailInfoMap.production));
        dispatch(showNotifier("added to favorites!"));
      }
    }
  };

  return (
    <Fragment>
      <div className="h-[200px] sm:h-[400px] relative flex items-end">
        <div className="w-full flex justify-between items-end text-header-main-color max-w-[1100px] mx-auto">
          <div className="">
            <h1 className="text-4xl px-5">{detailInfoMap.title} </h1>
            <span className="text-sm px-5 py-5">
              {detailInfoMap.title !== detailInfoMap.original_title &&
                detailInfoMap.original_title}
            </span>
          </div>
          {detailInfoMap.production ? (
            <FavoriteIcon
              className="p-5"
              icon={
                isFavorite ? (
                  <MdOutlineFavorite
                    className={`w-9 h-9`}
                    onClick={onFavoriteHandler}
                  />
                ) : (
                  <MdOutlineFavoriteBorder
                    className={`w-9 h-9`}
                    onClick={onFavoriteHandler}
                  />
                )
              }
            />
          ) : (
            ""
          )}
        </div>
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
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start w-full ">
        <div className=" w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-2/6 order-2 sm:order-1 max-w-[300px]">
          <Fragment>
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
          </Fragment>
        </div>
        <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/6 p-5 order-1 sm:order-2 max-w-[800px]">
          <div className="">
            {detailInfoMap.known_for_department && (
              <Fragment>
                <span className="text-xl">Known for:</span>
                <span className="bg-secondary-color text-header-main-color m-2 px-4 py-2 rounded-lg italic">
                  {detailInfoMap.known_for_department}
                </span>
              </Fragment>
            )}
            {detailInfoMap.genres?.map((e) => (
              <span
                key={e.id}
                className="inline-block bg-secondary-color text-header-main-color mr-4 my-2 px-4 py-2 rounded-lg italic"
              >
                {e.name}
              </span>
            ))}

            <p className="text-xl mt-4">
              {detailInfoMap.release_date &&
                `Release Date: ${detailInfoMap.release_date}`}
            </p>
          </div>
          <p className={`${detailInfoMap.overview && "indent-5"} italic pt-3`}>
            {detailInfoMap.overview
              ? detailInfoMap.overview
              : `Currently there's no overview for ${detailInfoMap.title}.`}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsPage;
