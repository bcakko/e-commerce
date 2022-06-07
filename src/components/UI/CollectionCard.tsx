import { useNavigate } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import ButtonWithIcon from "./ButtonWithIcon";
import CollectionImage from "./CollectionImage";

const CollectionCard = (props: {
  id: number;
  title?: string;
  imageUrl: string;
  rating: number;
  type: "movie" | "tv";
}) => {
  const navigate = useNavigate();

  const navigateToDetailsHandler = () => {
    navigate(`/detail/${props.type}/${props.id}`);
  };

  return (
    <div className="w-full p-3 text-left">
      <div className="h-full flex flex-col justify-between items-stretch">
        <CollectionImage
          className="cursor-pointer object-contain w-full rounded-t-lg"
          url={props.imageUrl}
          onClick={navigateToDetailsHandler}
          //? data-path={props.title ? "movie" : "tv"}
        />
        <div className="px-3 bg-main-color text-header-main-color rounded-b-lg pt-5">
          <p className="truncate font-semibold">{props.title}</p>
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
