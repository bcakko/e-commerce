import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collectionFetchAction } from "../../redux/actions/collectionActions";

const LinkWithText = (props: {
  type: "inner" | "outer";
  text: string;
  className?: string;
  data_path: string | null;
  data_url?: string | null;
  data_action?: any
}) => {
  const dispatch = useDispatch();

  const onClickHandler = (event: MouseEvent<Element>): void => {
    const { target } = event;
    const mainPath = (target as Element).getAttribute("data-path");
    const subPath = (target as Element).getAttribute("data-url");
    if (mainPath && subPath)
      dispatch(collectionFetchAction(mainPath, subPath, 1));
  };

  if (props.type === "inner" && props.data_action) {
    return(
      <NavLink onClick={props.data_action} to="/" className={props.className}>
        {props.text}
      </NavLink>
    )
  }

  else if (props.type === "inner" && props.data_url) {
    return (
      <NavLink
        onClick={onClickHandler}
        to={`collection/${props.data_path}/${props.data_url}/1`}
        data-path={props.data_path}
        data-url={props.data_url}
        className={props.className}
      >
        {props.text}
      </NavLink>
    );
  } else if (props.type === "inner" && props.data_url === null) {
    return(
    <NavLink onClick={onClickHandler} to={`/${props.data_path}`} data-path={props.data_path}
    className={props.className}>
      {props.text}
    </NavLink>
    )
  } else 
  return (
    <div className={props.className}>
      {props.text}
    </div>
  );
};
export default LinkWithText;
