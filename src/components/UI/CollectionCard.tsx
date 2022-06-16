import { useNavigate } from "react-router-dom";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import CollectionImage from "./CollectionImage";
import FavoriteIcon from "./FavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/RootState.types";
import { Movie } from "../../types/Movies.types";
import { Show } from "../../types/Shows.types";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../../redux/actions/favoritesActions";
import { showNotifier } from "../../redux/actions/notifierActions";
import { Fragment, useMemo } from "react";

const CollectionCard = (props: {
  id: number;
  title?: string | null;
  imageUrl?: string | null;
  rating?: number;
  type?: "movie" | "tv";
  production?: Movie | Show;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = useMemo(
    () => favorites.some((item) => props.imageUrl === item.poster_path),
    [favorites, props.imageUrl]
  );

  const navigateToDetailsHandler = () => {
    navigate(`/detail/${props.type}/${props.id}`);
  };

  const onFavoriteHandler = () => {
    if (props.production) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction(props.production));
        dispatch(showNotifier("removed from favorites!"));
      } else {
        dispatch(addToFavoritesAction(props.production));
        dispatch(showNotifier("added to favorites!"));
      }
    }
  };

  const Icon = isFavorite ? MdOutlineFavorite : MdOutlineFavoriteBorder;

  return (
    <div className="w-full h-full p-3 text-left">
      <div className="h-full flex flex-col justify-between items-stretch bg-main-color rounded-lg">
        <CollectionImage
          className="cursor-pointer object-contain w-full rounded-t-lg"
          url={props.imageUrl}
          // ! --
          {...(props.production ? { onClick: navigateToDetailsHandler } : null)}
        />
        <div className="px-3 bg-main-color text-header-main-color rounded-b-lg pt-5">
          <p className="truncate font-semibold">{props.title}</p>
          <div className="flex justify-between items-center">
            {props.production ? (
              <FavoriteIcon
                icon={
                  <Icon className={`w-7 h-7`} onClick={onFavoriteHandler} />
                }
              />
            ) : (
              ""
            )}
            <p className="font-bold pb-2">
              {props.rating ? props.rating.toFixed(1) : <></>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
