import React, { useState } from "react";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const ResponsiveMenu = () => {
    return (
      <div className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm fixed left-0 right-0 top-0 bottom-0 block z-10 w-screen h-screen transition duration-500 ease-in-out">
        <ul className="flex flex-col justify-end items-center w-full h-full ">
          <button
            className="absolute right-0 left-0 top-0 w-20 h-10 bottom-0 text-md p-2 m-auto rounded font-medium uppercase bg-purple-600 bg-opacity-75 shadow-md text-white sm:m-0 sm:left-auto sm:top-auto"
            onClick={() => {
              setIsMenu(false);
            }}
          >
            close
          </button>
          <MenuItem  color="text-white">home</MenuItem>
          <MenuItem href="#" color="text-white">about</MenuItem>
          <MenuItem href="#" color="text-white">tour packages</MenuItem>
          <MenuItem href="#" color="text-white">contact</MenuItem>
          <MenuItem href="#" color="text-white">login</MenuItem>
        </ul>
      </div>
    );
  };
  const MenuItem = (props) => {
    return (
      <li className={`font-light capitalize text-xl m-1 p-2 ${props.color}`}>
        <a href={props.href}>
          {props.children}
        </a>
      </li>
    );
  };

  return (
    <>
      {isMenu && <ResponsiveMenu />}
      <nav className="flex justify-between align-baseline">
        <h1 className="font-medium text-4xl pb-5 py-1 px-2 capitalize text-black text-opacity-90">
          traveler
        </h1>
        <div className=" w-10 my-3 mx-2 h-1 md:hidden"
         onClick={() => {
              setIsMenu(true);
            }}>
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
        </div>
        <ul className="space-x-5 hidden md:flex items-center p-2">
        <MenuItem className="text-black">home</MenuItem>
          <MenuItem href="#" color="text-black">about</MenuItem>
          <MenuItem href="#" color="text-black">tour packages</MenuItem>
          <MenuItem href="#" color="text-black">contact</MenuItem>
          <MenuItem href="#" color="my-2 px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-800 focus:ring-4 focus:ring-offset-2 focus:ring-purple-500">login</MenuItem>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
