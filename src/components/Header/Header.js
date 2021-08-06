import React from "react";
import Banner from "./Banner";
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="container m-auto box-border">
     <NavBar/>
     <Banner/>
    </header>
  );
};

export default Header;
