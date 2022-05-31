import { NavLink } from "react-router-dom";
const LinkWithIcon = (props: {
  type: "inner" | "outer";
  path: string;
  icon: JSX.Element;
  className?: string;
}) => {
  if (props.type === "inner") {
    return (
      <NavLink className={props.className} to={props.path}>
        {props.icon}
      </NavLink>
    );
  }
  return (
    <a className={props.className} href={props.path}>
      {props.icon}
    </a>
  );
};
export default LinkWithIcon;
