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

const CollectionCard = (props: {
  id: number;
  title: string;
  imageUrl: string;
  rating?: number;
  type?: "movie" | "tv";
  production?: Movie | Show;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((e) => props.imageUrl === e.poster_path);

  const navigateToDetailsHandler = () => {
    navigate(`/detail/${props.type}/${props.id}`);
  };

  const onFavoriteHandler = () => {
    if (props.production) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction(props.production));
      } else {
        dispatch(addToFavoritesAction(props.production));
      }
    }
  };

  return (
    <div className="w-full h-full p-3 text-left">
      <div className="h-full flex flex-col justify-between items-stretch bg-main-color rounded-lg">
        <CollectionImage
          className="cursor-pointer object-contain w-full rounded-t-lg"
          url={props.imageUrl}
          onClick={props.production ? navigateToDetailsHandler : () => {}}
        />
        <div className="px-3 bg-main-color text-header-main-color rounded-b-lg pt-5">
          <p className="truncate font-semibold">{props.title}</p>
          <div className="flex justify-between items-center">
            {props.production ? (
              <FavoriteIcon
                icon={
                  isFavorite ? (
                    <MdOutlineFavorite
                      className={`w-7 h-7`}
                      onClick={onFavoriteHandler}
                    />
                  ) : (
                    <MdOutlineFavoriteBorder
                      className={`w-7 h-7`}
                      onClick={onFavoriteHandler}
                    />
                  )
                }
              />
            ) : (
              ""
            )}
            <p className="font-bold pb-2">
              {props.rating ? props.rating.toFixed(1) : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
