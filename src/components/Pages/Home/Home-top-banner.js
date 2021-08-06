import React from "react";
import Destination from "./Destination.svg";

const HomeTopBanner = () => {
  const Card = (props) => {
    return (
      <div className="border border-purple-100 shadow-sm w-full rounded p-3">
        <h3 className="text-md pb-3 capitalize text-center text-gray-900">
          {props.title}
        </h3>
        <img src={props.img} />
        <p className="text-black text-opacity-75 capitalize pt-2 text-sm">
          started from {props.price}
        </p>
        <div className="flex justify-between items-center pt-1">
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-1 rounded text-white uppercase font-medium">
            buy
          </button>
          <span className="bg-purple-100 p-1 text-xs rounded-full text-gray-700">
            {props.period}
          </span>
        </div>
      </div>
    );
  };
  return (
    <>
      <h1 className="text-3xl capitalize text-opacity-70 text-center sm:text-left">
        top sale tour packages
      </h1>
      <div className="grid grid-cols-2 grid-rows-none gap-2 m-auto mt-3 sm:grid-cols-3 md:grid-cols-4">
        <Card
          title="tehran to shiraz"
          price="3.000T"
          period="4days"
          img={Destination}
        />
        <Card
          title="tehran to mashhad"
          price="2.500T"
          period="4days"
          img={Destination}
        />
        <Card
          title="tehran to istanbul"
          price="8.000T"
          period="3days"
          img={Destination}
        />{" "}
        <Card
          title="tehran to najaf"
          price="6.500T"
          period="3days"
          img={Destination}
        />
      </div>
    </>
  );
};
export default HomeTopBanner;
