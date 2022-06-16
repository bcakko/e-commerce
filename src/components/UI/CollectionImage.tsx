const CollectionImage = (props: {
  url: string | null | undefined;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      className={props.className}
      src={
        props.url
          ? `https://image.tmdb.org/t/p/original/${props.url}`
          : "http://cdn.onlinewebfonts.com/svg/img_546302.png"
      }
      alt="poster/backdrop"
      onClick={props.onClick}
    />
  );
};

export default CollectionImage;
