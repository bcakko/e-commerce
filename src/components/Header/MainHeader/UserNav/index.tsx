import { useEffect, useState, useRef } from "react"
// Components
import LinkWithIcon from "../../../UI/LinkWithIcon";
import MiniFav from "./MiniFav";
import DropdownMenu from "../../../UI/DropdownMenu";
import { FaHeart, FaUser } from "react-icons/fa"
// Types
import { RootState } from "../../../../types/RootState.types";
import { IUserNavProps } from "../../../../types/Header.types";
import { Movie } from "../../../../types/Movies.types";
import { Show } from "../../../../types/Shows.types";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { logUserInAction, logUserOutAction } from "../../../../redux/actions/userActions";
// Router
import { useNavigate, Link } from "react-router-dom";

const UserNav = (props: IUserNavProps) => {
  const { iconColor } = props;

  // Redux
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
  (state: RootState) => state.user.isLoggedIn
  );
  const user = useSelector(
  (state: RootState) => state.user.user
  );

  const favs = useSelector(
    (state: RootState) => state.favorites.favorites
  )

  // Ref
  const miniFavRef = useRef<HTMLDivElement>(null);
  const miniFavListRef = useRef<HTMLDivElement>(null);
  const showDropdown = () : void => {
  if(miniFavListRef && miniFavListRef.current !== null  && favs.length >= 1) {
    miniFavListRef.current.className = `block`;
  }
  };

  const hideDropdown = () : void => {
    if(miniFavListRef && miniFavListRef.current !== null) {
      miniFavListRef.current.className = "hidden";
    }
  };

  // Routing
  const navigate = useNavigate();
  const routeChange = () => {
    let path : string = `/`;
      navigate(path);
  }

  let [favorites, setFavorites] = useState<(Movie | Show)[]>();

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
    let userData;
    if(localStorage.hasOwnProperty("user")) {userData = localStorage.getItem("user");}
    let newUserData;
    if(userData!==undefined && userData!==null) newUserData = JSON.parse(userData)
    if(newUserData!==undefined && newUserData.id!==null) dispatch(logUserInAction(newUserData.id))
    let favData;
    if(localStorage.hasOwnProperty("favorites")) {favData = localStorage.getItem("favorites")}
    let newFavData;
    if(favData!==undefined && favData!==null) newFavData = JSON.parse(favData);
    if(favs!==undefined && favs!==null) setFavorites(newFavData)
  },[favs])

      return (
      <div className={`w-24 flex justify-around ${iconColor} items-center`}>
        {isLoggedIn ?
        <DropdownMenu ddTitle={ <FaUser className="hover:text-side-color transition-all" />
        }
        ddList={userLinks[0]}
        ddTitleStyle="text-xl"
        ddTitleHoverColor="text-side-color"
        ddListStyle="p-1 cursor-pointer text-sm text-secondary-color hover:text-side-color transition-all"
        ddBackgroundColor="bg-header-main-color"
        ddStyle="mr-5 z-20 w-[150px] -ml-[128px]"
        />
        :
        <Link to="/auth" className="hover:text-side-color transition-all ease-in">Sign-in</Link>}

        <div ref={miniFavRef} onMouseEnter={()=> showDropdown()} onMouseLeave={()=> hideDropdown()} className="xs:flex
          items-center">
          <LinkWithIcon type="inner" path="/favorites" icon={<FaHeart />} className="text-xl p-1 hover:text-side-color
          transition-all"/>
          <div ref={miniFavListRef} className="hidden">
            <MiniFav data_fav={favorites} data_style="border rounded overflow-hidden"/>
          </div>
        </div>
      </div>
  );
};

export default UserNav;