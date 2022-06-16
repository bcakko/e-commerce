const ButtonWithIcon = (props: {
  onClick?: (event: {}) => {};
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.icon}
    </button>
  );
};

export default ButtonWithIcon;
