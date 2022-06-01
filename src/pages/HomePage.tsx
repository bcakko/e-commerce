import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectionFetchAction } from "../redux/actions/collectionActions";
import { filterCollectionFetchAction } from "../redux/actions/filterCollectionActions";
import { RootState } from "../types/RootState.types";
const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: RootState) => state.collection.collection.movies
  );

  const userSearch = useSelector(
    (state: RootState) => state.filterCollection.collection
  );

  useEffect(() => {
    dispatch(collectionFetchAction("movie", "top_rated"));
    dispatch(collectionFetchAction("tv", "popular"));
  }, [dispatch]);

  console.log(movies);
  console.log(userSearch);
  return <div>{/* <Products /> */}</div>;
};
export default HomePage;
