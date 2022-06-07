import { useNavigate } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import ButtonWithIcon from "./ButtonWithIcon";
import CollectionImage from "./CollectionImage";
import { useDispatch } from "react-redux";
import { GET_DETAIL_FETCH } from "../../redux/actions/detailActions";

const CollectionCard = (props: {
  id: number;
  title?: string;
  imageUrl: string;
  rating: number;
  type: "movie" | "tv";
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToDetailsHandler = () => {
    dispatch({
      type: GET_DETAIL_FETCH,
      payload: {
        id: props.id,
        path: props.type,
      },
    });
    navigate(`/detail/${props.type}/${props.id}`);
  };

  return (
    <div className="w-full p-3 text-left">
      <div className="h-full flex flex-col justify-between">
        <CollectionImage
          className="cursor-pointer object-contain pb-5 w-full"
          url={props.imageUrl}
          onClick={navigateToDetailsHandler}
          //? data-path={props.title ? "movie" : "tv"}
        />
        <div className="px-3">
          <p className="truncate">{props.title}</p>
          <div className="flex justify-between items-center">
            <ButtonWithIcon
              icon={<MdOutlineFavoriteBorder className="w-7 h-7" />}
            />
            <p className="font-bold">{props.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
