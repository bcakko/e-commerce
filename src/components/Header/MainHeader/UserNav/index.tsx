import { useEffect, useState } from "react"
// Components
import LinkWithIcon from "../../../UI/LinkWithIcon";
import MiniCart from "./MiniCart";
import DropdownMenu from "../../../UI/DropdownMenu";
import { FaHeart, FaUser } from "react-icons/fa"
// Types
import { RootState } from "../../../../types/RootState.types";
import { IUserNavProps } from "../../../../types/Header.types";
import { Link } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";


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
          main_path: "",
          sub_path: null,
          data_action: () => localStorage.removeItem("user")
        }
      ]
    }
  ];

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  const user = useSelector(
    (state: RootState) => state.user.user
  );


  let [token, setToken] = useState<null|string>();

  let localData = null;

  useEffect(()=> {
    localData = (localStorage.getItem("user"))
    if(localData != null) {
      localData = JSON.parse(localData)
      setToken(localData.token)
    }
  },[])



  return ( 
    <div className={`w-24 flex justify-around ${iconColor} items-center`}>
      {token!=null ?
        <DropdownMenu 
          ddTitle={
             <FaUser className="hover:text-side-color transition-all"/>
          } 
          ddList={userLinks[0]} 
          ddTitleStyle="text-xl"
          ddTitleHoverColor="text-side-color"
          ddListStyle="p-1 cursor-pointer text-sm text-secondary-color hover:text-side-color transition-all"
          ddBackgroundColor="bg-header-main-color"
          ddStyle="mr-5 z-20 w-[150px] -ml-[128px]" 
        />
      : <Link to="/auth">Signin</Link>}

      <LinkWithIcon type="inner" path="/favourites" icon={<FaHeart/>} className="text-xl p-1 hover:text-side-color transition-all"/>
    </div>
  );
};

export default UserNav;
