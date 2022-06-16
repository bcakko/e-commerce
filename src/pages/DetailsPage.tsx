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

  let isUrlValid =
    mainCategory === "tv" ||
    mainCategory === "movie" ||
    mainCategory === "person";

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

  if (isLoading) {
    return (
      <Modal onClose={() => {}}>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (
    !isUrlValid ||
    (!("title" in detail) &&
      !("name" in detail && ("profile_path" || "poster_path" in detail)))
    // !("name" in detail && "profile_path" in detail) &&
    // !("name" in detail && "poster_path" in detail))
  ) {
    return <NotFoundPage />;
  }

  const isFavorite = favorites.some(
    (item) => detail.poster_path === item.poster_path
  );

  const isPerson = detail.known_for_department;

  const onFavoriteHandler = () => {
    if (!isPerson) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction(detail as Movie | Show));
        dispatch(showNotifier("removed from favorites!"));
      } else {
        dispatch(addToFavoritesAction(detail as Movie | Show));
        dispatch(showNotifier("added to favorites!"));
      }
    }
  };

  const Icon = isFavorite ? MdOutlineFavorite : MdOutlineFavoriteBorder;

  return (
    <Fragment>
      <div className="h-[200px] sm:h-[400px] relative flex items-end">
        <div className="w-full flex justify-between items-end text-header-main-color max-w-[1100px] mx-auto">
          <div className="">
            <h1 className="text-4xl px-5">{detail.title} </h1>
            <span className="text-sm px-5 py-5">
              {detail.title !== detail.original_title && detail.original_title}
            </span>
          </div>
          {detail && (
            <FavoriteIcon
              className="p-5"
              icon={<Icon className={`w-9 h-9`} onClick={onFavoriteHandler} />}
            />
          )}
        </div>
        {detail?.backdrop_path ? (
          <CollectionImage
            url={detail.backdrop_path}
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
              title={detail.title || detail.name}
              imageUrl={detail.profile_path || detail.poster_path}
              rating={detail.vote_average || undefined}
              production={detail as Movie | Show}
            />
          </Fragment>
        </div>
        <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/6 p-5 order-1 sm:order-2 max-w-[800px]">
          <div className="">
            {detail.known_for_department && (
              <Fragment>
                <span className="text-xl">Known for:</span>
                <span className="bg-secondary-color text-header-main-color m-2 px-4 py-2 rounded-lg italic">
                  {detail.known_for_department}
                </span>
              </Fragment>
            )}
            {detail.genres?.map((genre) => (
              <span
                key={genre.id}
                className="inline-block bg-secondary-color text-header-main-color mr-4 my-2 px-4 py-2 rounded-lg italic"
              >
                {genre.name}
              </span>
            ))}

            <p className="text-xl mt-4">
              {detail.release_date && `Release Date: ${detail.release_date}`}
            </p>
          </div>
          <p className={`${detail.overview && "indent-5"} italic pt-3`}>
            {detail.overview
              ? detail.overview
              : `Currently there's no overview for ${detail.title}.`}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsPage;
