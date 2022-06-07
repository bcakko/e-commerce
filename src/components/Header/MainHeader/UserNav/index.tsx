// Components
import LinkWithIcon from "../../../UI/LinkWithIcon";
import MiniCart from "./MiniCart";
import DropdownMenu from "../../../UI/DropdownMenu";
import { FaHeart, FaUser } from "react-icons/fa"
// Types
import { IUserNavProps } from "../../../../types/Header.types";

const UserNav = (props: IUserNavProps) => {
  const { iconColor } = props;
  const userLinks = [
    {
      title: "Account",
      links: [
        {
          title: "My Account",
          main_path: "account",
          sub_path: null
        },
        {
          title: "Settings",
          main_path: "account",
          sub_path: null
        },
        {
          title: "Log Out",
          main_path: "account",
          sub_path: null
        }
      ]
    }
  ];

  return ( 
    <div className={`w-24 flex justify-around ${iconColor} items-center`}>
      <DropdownMenu 
        ddTitle={
          <LinkWithIcon type="inner" path="/profile" icon={<FaUser/>} className="hover:text-side-color transition-all"/>
        } 
        ddList={userLinks[0]} 
        ddTitleStyle="text-xl"
        ddTitleHoverColor="text-side-color"
        ddListStyle="p-1 cursor-pointer text-sm text-secondary-color hover:text-side-color transition-all"
        ddBackgroundColor="bg-header-main-color"
        ddStyle="mr-5 z-20 w-[150px] -ml-[128px]" 
        />
      <LinkWithIcon type="inner" path="/favourites" icon={<FaHeart/>} className="text-xl p-1 hover:text-side-color transition-all"/>
    </div>
  );
};

export default UserNav;
