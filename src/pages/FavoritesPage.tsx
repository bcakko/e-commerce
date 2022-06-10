import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/UI/CollectionCard";
import { Movie } from "../types/Movies.types";
import { RootState } from "../types/RootState.types";
import { Show } from "../types/Shows.types";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  return (
    <div className="flex flex-wrap pb-5">
      {favorites.map((item: Movie | Show) => (
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
  );
};

export default FavoritesPage;
