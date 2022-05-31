const ButtonWithText = (props: {
  onClick?: (event: {}) => {};
  text: string;
  className?: string;
}) => {
  return (
    <div>
      <button
        className={`text-sm sm:text-base lg:text-xl px-2 py-1 sm:px-6 sm:py-2.5 bg-secondary-color rounded-3xl text-side-color hover:bg-main-color ${props.className}`}
        type="button"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonWithText;
