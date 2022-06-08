import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionCard from "../components/UI/CollectionCard";
import { GET_COLLECTION_FETCH } from "../redux/actions/collectionActions";

import { Movie } from "../types/Movies.types";
import { Show } from "../types/Shows.types";
import { RootState } from "../types/RootState.types";
import NotFoundPage from "./NotFoundPage";

const CollectionPage = () => {
  const { mainCategory, subCategory } = useParams();
  const dispatch = useDispatch();
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
        },
      });
    }
  }, [dispatch]);

  if (isUrlValid) {
    results =
      collection[collectionMap[mainCategory ? mainCategory : ""]].results;
  }

  return isUrlValid ? (
    <div className="flex flex-wrap py-10">
      {results.map((item: Movie | Show) => (
        <div key={item.id} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <CollectionCard
            id={item.id}
            title={"title" in item ? item.title : item.name}
            imageUrl={item.poster_path}
            rating={item.vote_average}
            type={"title" in item ? "movie" : "tv"}
          />
        </div>
      ))}
      <div>
        
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default CollectionPage;
