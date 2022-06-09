const FavoriteIcon = (props: {
  onClick?: (event: {}) => {};
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <div>
      <button className={props.className} type="button" onClick={props.onClick}>
        {props.icon}
      </button>
    </div>
  );
};

export default FavoriteIcon;
