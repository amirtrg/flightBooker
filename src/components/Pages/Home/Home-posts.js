import React, { useState } from "react";

const HomePosts = (props) => {
  const SalePackages = [...props.SalePackages];
  const classes = {
    hide: "h-0 overflow-hidden  transition-all duration-500 ease-linear ",
    card: "border border-purple-300 shadow-sm w-full rounded px-3  bg-gradient-to-b from-white to-gray-100 transition-all duration-500 ease-linear",
  };
  const [buttonTitle, setButtonTitle] = useState("بیشتر");
  const [more, setMore] = useState(classes.hide);

  const moreHandler = () => {
    if (more === classes.hide) {
      setMore(classes.card);
      setButtonTitle("کمتر");
    }
    if (more === classes.card) {
      setMore(classes.hide);
      setButtonTitle("بیشتر");
    }
  };

  const Card = (props) => {
    return (
      <div className={props.className}>
        <h3 className="text-md p-3 capitalize text-center text-gray-900">
          {props.title}
        </h3>
        <img src={props.img} alt={props.title} />
        <p className="text-black text-opacity-75 capitalize pt-2 text-sm my-2">
          شروع تور از {props.price}
        </p>
        <div className="flex flex-col-reverse md:justify-between items-center pt-1 my-2 md:flex-row">
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-1 rounded text-white uppercase font-medium focus:bg-blue-800 m-2 md:m-0 focus:ring-1 ">
            اطلاعات بیشتر
          </button>
          <span className="bg-purple-100 p-1 text-xs rounded-full text-purple-700 ">
            {props.period}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-10 ">
      <h1 className="text-3xl capitalize text-opacity-70 text-center sm:text-right md:text-center p-2">
        {props.title}
      </h1>

      <div className="grid grid-cols-2 overflow-hidden gap-2 m-auto mt-3 sm:grid-cols-3 md:grid-cols-4 lg:w-2/3 lg:grid-cols-3">
        {SalePackages.slice(0, window.screen.width < 500 ? 4 : 3).map(
          (pckg) => {
            return (
              <Card
                title={pckg.title}
                price={pckg.price}
                period={pckg.period}
                img={pckg.img}
                key={Math.random()}
                className={classes.card}
              />
            );
          }
        )}
        {SalePackages.slice((0, window.screen.width < 500 ? 4 : 3), SalePackages.length).map((pckg) => {
          return (
            <Card
              title={pckg.title}
              price={pckg.price}
              period={pckg.period}
              img={pckg.img}
              key={Math.random()}
              className={more}
            />
          );
        })}
      </div>
      {(SalePackages.length >3) && (
        <button
          className=" py-1 px-3 text-purple-500  mx-auto block mt-4"
          onClick={moreHandler}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};
export default HomePosts;
