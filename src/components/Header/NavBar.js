import React, { useState, useEffect } from "react";

const NavBar = (props) => {
  const [isMenu, setIsMenu] = useState(false);

  const menuItems = [
    { name: "خانه", href: "#" },
    { name: "درباره ما", href: "#" },
    { name: "پکیج های تور", href: "#" },
    { name: "ارتباط با ما", href: "#" },
  ];
  const ResponsiveMenu = () => {
    return (
      <div className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm fixed left-0 right-0 top-0 bottom-0 block z-20 w-screen h-screen transition duration-500 ease-in-out">
        <ul className="flex flex-col justify-center items-center w-full h-full ">
          <button
            className="absolute right-10 top-10 w-20 h-10 bottom-0 text-md p-2  rounded font-medium uppercase bg-purple-600 bg-opacity-75 shadow-md text-white"
            onClick={() => {
              setIsMenu(false);
            }}
          >
            بستن
          </button>
          {menuItems.map((item) => {
            return (
              <MenuItem color="text-white" href={item.href}>
                {item.name}
              </MenuItem>
            );
          })}
          <button
            className="py-2 px-5 rounded bg-purple-600 text-white hover:bg-purple-800 focus:ring-4 focus:ring-offset-2 focus:ring-purple-500"
            onClick={props.onOpenLogin}
          >
            ورود
          </button>
        </ul>
      </div>
    );
  };
  const MenuItem = (props) => {
    return (
      <li
        className={`font-light capitalize text-xl m-1 p-2 ${props.color}`}
        onClick={props.onClick}
      >
        <a href={props.href}>{props.children}</a>
      </li>
    );
  };

  return (
    <>
      {isMenu && <ResponsiveMenu />}
      <nav className="flex justify-between align-baseline  items-center container p-5">
        <h1 className="font-medium text-4xl capitalize text-purple-900 text-opacity-90 mr-5 logo">
          همسفر
        </h1>
        <div
          className=" w-10 mx-2  bg-white md:hidden"
          onClick={() => {
            setIsMenu(true);
          }}
        >
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
          <div className="w-100 h-1 my-1 bg-purple-800 rounded"></div>
        </div>
        <ul className="space-x-5 hidden md:flex items-center p-2">
          {menuItems.map((item) => {
            return (
              <MenuItem className="text-black" href={item.href}>
                {item.name}
              </MenuItem>
            );
          })}
          <button
            className="my-2 px-5 py-2 rounded bg-purple-600 text-white hover:bg-purple-800 focus:ring-4 focus:ring-offset-2 focus:ring-purple-500"
            onClick={props.onOpenLogin}
          >
            ورود
          </button>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
