import React from "react";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";

const Header = () => {
  return (
      <div className="w-full">
        <MainHeader/>
        <NavBar/>
      </div>
    );
};

export default Header;
