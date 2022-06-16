import { Movie } from "../../types/Movies.types";
import { Show } from "../../types/Shows.types";
import Carousel from "./Carousel";

const TopPick = (props: { production: (Movie | Show)[] }) => {
  return (
      <Carousel type="banner" slides={props.production} />
  );
};

export default TopPick;
