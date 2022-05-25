const LinkWithText = (props: any) => {
  return (
    <div className={props.className}>
      <a>{props.text}</a>
    </div>
  );
};

export default LinkWithText;
