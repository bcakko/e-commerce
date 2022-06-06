const CollectionImage = (props: {
  url: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      className={props.className}
      src={`https://image.tmdb.org/t/p/original/${props.url}`}
      alt="poster/backdrop"
      onClick={props.onClick}
    />
  );
};

export default CollectionImage;
