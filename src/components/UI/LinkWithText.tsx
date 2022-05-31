import { NavLink } from "react-router-dom";
const LinkWithText = (props: {
  type: "inner" | "outer";
  path: string;
  text: string;
  className?: string;
}) => {
  if (props.type === "inner") {
    return (
      <NavLink className={props.className} to={props.path}>
        {props.text}
      </NavLink>
    );
  }
  return (
    <a className={props.className} href={props.path}>
      {props.text}
    </a>
  );
};
export default LinkWithText;