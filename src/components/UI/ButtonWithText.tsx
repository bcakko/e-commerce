const ButtonWithText = (props: {
  onClick?: (event: {}) => {};
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`px-4 py-1 bg-secondary-color rounded-lg text-side-color ${props.className}`}
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ButtonWithText;
