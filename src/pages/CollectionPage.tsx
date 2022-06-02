import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "../types/RootState.types";

const CollectionPage = () => {
  const { mainCategory, subCategory } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: RootState) => state.collection.collection.movies
  );
  const shows = useSelector(
    (state: RootState) => state.collection.collection.shows
  );

  if (mainCategory === "tv") {
    return <div>
      {shows.results ? shows.results.map(item => <div>{item.name}</div>): "loading"}
    </div>;
  }
  if (mainCategory === "movie") {
    return <div>
        {movies.results ? movies.results.map(item => <div>{item.title}</div>): "loading"}
    </div>;
  } else {
  }

  return <div>CollectionPage</div>;
};

export default CollectionPage;
