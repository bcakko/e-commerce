import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";

import CollectionCard from "../components/UI/CollectionCard";
import { GET_COLLECTION_FETCH } from "../redux/actions/collectionActions";

import { Movie } from "../types/Movies.types";
import { Show } from "../types/Shows.types";
import { RootState } from "../types/RootState.types";
import NotFoundPage from "./NotFoundPage";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Modal from "../components/UI/Modal";

const CollectionPage = () => {
  const { mainCategory, subCategory, page } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.collection.isLoading
  );
  const collection = useSelector(
    (state: RootState) => state.collection.collection
  );
  const collectionMap: {
    [key: string]: "shows" | "movies";
  } = {
    tv: "shows",
    movie: "movies",
  };

  let isUrlValid: boolean = false;
  let results: (Movie | Show)[] = [];

  if (
    (mainCategory === "tv" || mainCategory === "movie") &&
    (subCategory === "top_rated" ||
      subCategory === "popular" ||
      subCategory === "upcoming" ||
      subCategory === "on_the_air")
  ) {
    isUrlValid = true;
  }

  useEffect(() => {
    if (isUrlValid) {
      dispatch({
        type: GET_COLLECTION_FETCH,
        payload: {
          mainCategory,
          subCategory,
          page: page ? +page : 1,
        },
      });
    }
  }, [dispatch, page, isUrlValid, mainCategory, subCategory]);

  if (isUrlValid) {
    results =
      collection[collectionMap[mainCategory ? mainCategory : ""]].results;
  }
  if (isLoading) {
    return (
      <Modal onClose={() => {}}>
        <LoadingSpinner />
      </Modal>
    );
  }

  const paginationHandler = (event: any) => {
    //! Ugur ve Can'a sor!
    console.log(event);
    if (!event.target.textContent) {
      navigate(
        `/collection/${mainCategory}/${subCategory}/${page ? +page + 1 : 1}`
      );
    } else
      navigate(
        `/collection/${mainCategory}/${subCategory}/${event.target.textContent}`
      );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome & Firefox
  };

  const headerTextMap: {
    [key: string]: string;
  } = {
    tv: "TV Shows",
    movie: "Movies",
    popular: "Popular",
    on_the_air: "On the Air",
    top_rated: "Top Rated",
    upcoming: "Upcoming",
  };

  return isUrlValid ? (
    <div className="py-10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between px-7 ">
        <h1 className="text-3xl font-semibold">{`${
          subCategory ? headerTextMap[subCategory] : ""
        } ${mainCategory ? headerTextMap[mainCategory] : ""}`}</h1>
        <h3>Page {page}</h3>
      </div>
      <div className="flex flex-wrap pb-5">
        {results.map((item: Movie | Show) => (
          <div
            key={item.id}
            className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
          >
            <CollectionCard
              id={item.id}
              title={"title" in item ? item.title : item.name}
              imageUrl={item.poster_path}
              rating={item.vote_average}
              type={"title" in item ? "movie" : "tv"}
              production={item}
            />
          </div>
        ))}
      </div>
      <Pagination
        className="w-fit mx-auto"
        count={50}
        page={page ? +page : 1}
        onChange={paginationHandler}
        variant="outlined"
        shape="rounded"
        color="secondary"
        hidePrevButton
        hideNextButton
      />
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default CollectionPage;
