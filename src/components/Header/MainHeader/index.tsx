import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";
const MainHeader = () => {
  return (
      <header className="w-full h-28 flex justify-center border-b border-main-color">
        <div className="sm:w-full md:flex lg:w-11/12 justify-between items-center font-sans">
          <Link to="/">
            <div className="text-main-color font-bolds lg:text-3xl lg:flex-col md:text-3xl md:flex md:flex-col">
              <span>fake</span>
              <span>store</span>
            </div>
          </Link>
          <SearchBar 
          mainWidth="md:w-80" mainBorderColor="border-main-color" mainTextColor="text-main-color" mainBgColor="bg-header-main-color" inputTextColor="text-main-color" inputBgColor="bg-header-main-color" inputPlaceholderColor="placeholder:text-main-color"/>
          <UserNav iconColor="text-main-color"/>
        </div>
      </header>
    );
};

export default MainHeader;
