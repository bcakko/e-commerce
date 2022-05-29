import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";
const MainHeader = () => {
  return (
      <header className="w-full h-28 bg-main-color flex justify-center ">
        <div className="sm:w-full md:flex lg:w-11/12 justify-between items-center font-sans">
          <Link to="/">
            <div className="text-header-main-color font-extralight lg:text-3xl lg:flex-col md:text-3xl md:flex md:flex-col">
              <span>muddy</span>
              <span>store</span>
            </div>
          </Link>
          <SearchBar 
          mainWidth="md:w-80" mainBorderColor="border-header-secondary-color" mainTextColor="text-header-secondary-color" mainBgColor="bg-main-color" inputTextColor="text-header-main-color" inputBgColor="bg-main-color" inputPlaceholderColor="placeholder:text-header-main-color"/>
          <UserNav/>
        </div>
      </header>
    );
};

export default MainHeader;
