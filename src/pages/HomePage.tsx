import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/UI/Carousel";
import TopPick from "../components/UI/TopPick";
import { collectionFetchAction } from "../redux/actions/collectionActions";
import { filterCollectionFetchAction } from "../redux/actions/filterCollectionActions";
import { Movie } from "../types/Movies.types";
import { RootState } from "../types/RootState.types";
import { Show } from "../types/Shows.types";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: RootState) => state.collection.collection.movies
  );
  const shows = useSelector(
    (state: RootState) => state.collection.collection.shows
  );
  const isLoading = useSelector(
    (state: RootState) => state.collection.isLoading
  );

  useEffect(() => {
    dispatch(collectionFetchAction("movie", "popular"));
    dispatch(collectionFetchAction("tv", "popular"));
    dispatch(filterCollectionFetchAction("brad"));
  }, [dispatch]);

  if (isLoading) {
    return <p className="pt-16">Loading...</p>;
  }

  // Top picks selector
  let topPick: (Movie | Show)[] = [];
  if (movies.results.length > 0 && shows.results.length > 0) {
    topPick.push(movies.results[0], shows.results[0]);
  }

  return (
    <div>
      <TopPick production={topPick} />
      <div className="w-full lg:w-11/12 xl:w-4/5 mx-auto mt-16">
        <h1 className="text-3xl font-semibold">The Most Popular Movies</h1>
        <Carousel type="list" slides={movies.results} />
        <h1 className="text-3xl font-semibold">The Most Popular TV Shows</h1>
        <Carousel type="list" slides={shows.results} />
      </div>
    </div>
  );
};

export default HomePage;
