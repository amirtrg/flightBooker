import React, { useState } from "react";
import Banner from "./Banner";
import LoginMenu from "./LoginSystem/LoginMenu";
import NavBar from "./NavBar";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openMenuHandler = () => {
    setIsLoginOpen(true);
  };
  const closeMenuHandler = () => {
    setIsLoginOpen(false);
  };
  return (
    <header className="container m-auto box-border">
      {isLoginOpen && <LoginMenu onClose={closeMenuHandler} />}

      <NavBar onOpenLogin={openMenuHandler} />
      <Banner />
    </header>
  );
};

export default Header;
