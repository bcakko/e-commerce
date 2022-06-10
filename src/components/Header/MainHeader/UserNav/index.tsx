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
import { logUserInAction, logUserOutAction } from "../../../../redux/actions/userActions";
// Router
import { useNavigate } from "react-router-dom";

const UserNav = (props: IUserNavProps) => {
  const { iconColor } = props;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  const user = useSelector(
    (state: RootState) => state.user.user
  );

  // Routing
  const navigate = useNavigate();
  const routeChange = () => {
    let path : string = `/`;
    navigate(path);
  }

  const userLinks = [
    {
      title: "Account",
      links: [
        {
          title: user.username,
          main_path: "",
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
          data_action: () => {localStorage.removeItem("user"); dispatch(logUserOutAction()); routeChange();}
        }
      ]
    }
  ];



  useEffect(()=> {
    let localData;
    if(localStorage.hasOwnProperty("user")) {localData = localStorage.getItem("user");}
    let newLocalData;
    if(localData!==undefined && localData!==null) newLocalData = JSON.parse(localData)
    if(newLocalData!==undefined && newLocalData.id!==null) dispatch(logUserInAction(newLocalData.id))
  },[])

  return ( 
    <div className={`w-24 flex justify-around ${iconColor} items-center`}>
      {isLoggedIn ?
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
      : <Link to="/auth" className="hover:text-side-color transition-all ease-in">Signin</Link>}

      <LinkWithIcon type="inner" path="/favorites" icon={<FaHeart/>} className="text-xl p-1 hover:text-side-color transition-all"/>
    </div>
  );
};

export default UserNav;
