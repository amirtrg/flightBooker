import React from "react";

import Header_travel from "./Header_travel.svg";
import traveling_animate from './traveling_animate.svg'

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center container m-auto">
      <img src={traveling_animate} className="w-full sm:w-1/2 px-2" />
      <div className="sm:order-first">
        <h1 className="text-4xl text-purple-600 font-medium tracking-tighter capitalize px-2">
          book a tour around the world
        </h1>
        <p className="px-2 text-md capitalize text-purple-400 ">
          with just a click!
        </p>
        <button
          className=" py-4 my-2 bg-gradient-to-tr from-purple-900
          via-purple-500 to-purple-300 w-full md:w-1/2 sm:rounded text-white uppercase text-lg font-medium shadow-md  
      hover:bg-purple-800 focus:bg-purple-900 focus:ring-4  focus:ring-offset-2 focus:ring-purple-500"
        >
          click to book
        </button>
      </div>
    </div>
  );
};

export default Banner;
