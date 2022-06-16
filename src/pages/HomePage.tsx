import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/UI/Carousel";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Modal from "../components/UI/Modal";
import TopPick from "../components/UI/TopPick";
import { collectionFetchAction } from "../redux/actions/collectionActions";
import { filterCollectionFetchAction } from "../redux/actions/filterCollectionActions";
import { Movie } from "../types/Movies.types";
import { RootState } from "../types/RootState.types";
import { Show } from "../types/Shows.types";

const HomePage = () => {
  const dispatch = useDispatch();
  // const movies = useSelector(
  //   (state: RootState) => state.collection.collection.movies
  // );
  // const shows = useSelector(
  //   (state: RootState) => state.collection.collection.shows
  // );
  // const collectionIsLoading = useSelector(
  //   (state: RootState) => state.collection.isLoading
  // );

  const {
    collection: { movies, shows },
    isLoading: collectionIsLoading,
  } = useSelector((state: RootState) => state.collection);

  useEffect(() => {
    dispatch(collectionFetchAction("movie", "popular", 1));
    dispatch(collectionFetchAction("tv", "popular", 1));
  }, [dispatch]);

  if (collectionIsLoading) {
    return (
      <Modal onClose={() => {}}>
        <LoadingSpinner />
      </Modal>
    );
  }

  // Top picks selector
  let topPick: (Movie | Show)[] = [];
  if (movies.results.length > 0 && shows.results.length > 0) {
    topPick.push(movies.results[0], shows.results[0]);
  }

  return (
    <>
      <TopPick production={topPick} />
      <div className="w-full lg:w-11/12 xl:w-4/5 mx-auto mt-16">
        <h1 className="text-3xl font-semibold">The Most Popular Movies</h1>
        <Carousel type="list" slides={movies.results} />
        <h1 className="text-3xl font-semibold">The Most Popular TV Shows</h1>
        <Carousel type="list" slides={shows.results} />
      </div>
    </>
  );
};

export default HomePage;
