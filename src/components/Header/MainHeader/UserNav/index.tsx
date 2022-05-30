import LinkWithIcon from "../../../UI/LinkWithIcon";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import { IUserNavProps } from "../../../../types/Header.types";
const UserNav = (props: IUserNavProps) => {
  const { iconColor } = props;
  return ( 
    <div className={`w-32 flex justify-around ${iconColor}`}>
      <LinkWithIcon type="inner" path="/profile" icon={<FaUser/>} className="border rounded-2xl p-2"/>
      <LinkWithIcon type="inner" path="/favourites" icon={<FaHeart/>} className="border rounded-2xl p-2"/>
      <LinkWithIcon type="inner" path="/cart" icon={<FaShoppingCart/>} className="border rounded-2xl p-2"/>
    </div>
  );
};

export default UserNav;
