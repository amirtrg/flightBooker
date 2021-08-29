import React from "react";

// import Header_travel from "./Header_travel.svg";
import traveling_animate from './traveling_animate.svg'

const Banner = () => {
  return (
    <div className="pb-10 flex flex-col items-center justify-center sm:flex-row sm:items-center container m-auto">
      <img src={traveling_animate} className="w-full sm:w-1/2 px-2" alt="bbr"/>
      <div className="sm:order-first">
        <h1 className="text-4xl text-purple-600 font-medium tracking-tighter capitalize px-2">
         دور دنیا رو سفر کنید
        </h1>
        <p className=" px-2 text-md capitalize text-purple-400 ">
          فقط با یک کلیک
        </p>
        <button
          className=" py-4 my-2 bg-gradient-to-tr 
          from-purple-800 to-purple-400 w-full  md:w-1/2 sm:rounded text-white uppercase text-lg font-medium shadow-md  
      hover:bg-purple-800 focus:bg-purple-900 focus:ring-2  focus:ring-offset-2 focus:ring-purple-500"
        >
        رزرو کنید
        </button>
      </div>
    </div>
  );
};

export default Banner;
