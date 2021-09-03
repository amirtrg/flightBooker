import React from "react";
import HomePosts from "./Home-posts";
import Destination from "./Destination.svg";

const Home = () => {
  const Popular = {
    title: "پرطرفدار ترین تور های مسافرتی",
    SalePackages: [
      {
        title: " کیش",
        price: "4.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "مشهد",
        price: "2.900.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "ازمیر",
        price: "3.500.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "ایروان",
        price: "5.350.000 تومان ",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "مسکو",
        price: "10.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "استانبول",
        price: "7.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
    ],
  };
  const Domestic = {
    title: "تور های مسافرتی داخلی",
    SalePackages: [
      {
        title: " کیش",
        price: "4.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "مشهد",
        price: "2.900.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "تبریز",
        price: "2.500.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: " اصفهان",
        price: "3.200.000 تومان ",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "رشت",
        price: "2.700.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "آبادان",
        price: "2.000.000 تومان",
        period: "3 روز",
        img: Destination,
      },
    ],
  };
  const Foreign = {
    title: "تور های مسافرتی خارجی",
    SalePackages: [
      {
        title: "دبی",
        price: "9.000.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "آنکارا",
        price: "5.900.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "ازمیر",
        price: "3.500.000 تومان",
        period: "3 روز",
        img: Destination,
      },
      {
        title: "ایروان",
        price: "5.350.000 تومان ",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "مسکو",
        price: "10.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
      {
        title: "استانبول",
        price: "7.000.000 تومان",
        period: "4 روز",
        img: Destination,
      },
    ],
  };
  const Newest = {
    title: "جدید ترین تور های تفریحی",
    SalePackages: [
      {
        title: " کویرگردی",
        price: "1.500.000 تومان",
        period: "2 روز",
        img: Destination,
      },
      {
        title: "آفرود",
        price: "1.900.000 تومان",
        period: "2 روز",
        img: Destination,
      },
      {
        title: "کمپینگ",
        price: "1.800.000 تومان",
        period: "3 روز",
        img: Destination,
      },
    ],
  };
  return (
    <main className="container mx-auto p-2">
      <HomePosts {...Popular} />
      <HomePosts {...Newest} />
      <HomePosts {...Domestic} />
      <HomePosts {...Foreign} />
    </main>
  );
};
export default Home;
