// Components
import LinkWithIcon from "../../../UI/LinkWithIcon";
import MiniCart from "./MiniCart";
import DropdownMenu from "../../../UI/DropdownMenu";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
// Types
import { IUserNavProps } from "../../../../types/Header.types";

const UserNav = (props: IUserNavProps) => {
  const { iconColor } = props;
  const userLinks = ["My Account", "Settings", "Log out"];
  return ( 
    <div className={`w-40 flex justify-around ${iconColor} items-center`}>
      <DropdownMenu 
        ddTitle={
          <LinkWithIcon type="inner" path="/profile" icon={<FaUser/>} className="hover:text-side-color transition-all"/>
        } 
        ddList={userLinks} 
        ddTitleStyle="text-xl"
        ddTitleHoverColor="text-side-color"
        ddListStyle="p-1 cursor-pointer text-sm text-secondary-color hover:text-side-color transition-all"
        ddBackgroundColor="bg-header-main-color"/>
      <LinkWithIcon type="inner" path="/favourites" icon={<FaHeart/>} className="text-xl p-1 hover:text-side-color transition-all"/>
      <LinkWithIcon type="inner" path="/cart" icon={<FaShoppingCart/>} className="text-xl p-1 hover:text-side-color transition-all"/>
    </div>
  );
};

export default UserNav;
