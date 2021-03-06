import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";
const MainHeader = () => {
  return (
      <header className="w-full h-28 flex justify-center border-b border-main-color">
        <div className="xs:w-full xs:flex lg:w-11/12 justify-between items-center font-sans">
          <Link to="/">
            <div className="md:text-3xl md:flex md:flex-col xs:text-md text-main-color hover:text-side-color transition-all">
              <span>fake</span>
              <span>collection</span>
            </div>
          </Link>
          <SearchBar 
          mainWidth="xs:w-40 sm:w-80" mainTextColor="text-main-color" mainBgColor="bg-header-main-color" inputTextColor="text-main-color" inputPlaceholderColor="placeholder:text-main-color"/>
          <UserNav iconColor="text-main-color"/>
        </div>
      </header>
    );
};

export default MainHeader;
