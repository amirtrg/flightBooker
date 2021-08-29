import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-200 p-2">
      <div className="container mx-auto ">
        <h1 className="text-3xl py-5 capitalize text-purple-800 logo">همسفر</h1>
        <div className="pb-5 m-auto">
          <div
            className="grid 
          grid-cols-2 gap-5
          sm:grid-cols-3 lg:w-1/2 lg:m-auto  text-center"
          >
            <ul className="text-purple-400">
              <li>خانه</li>
              <li>پکیج های تور</li>
              <li>درباره ما</li>
              <li>ارتباط با ما</li>
            </ul>
            <ul className="text-purple-400">
              <li>همسفر من</li>
              <li>سفر های من</li>
              <li>پیگیری رزرو</li>
            </ul>
            <ul className="text-purple-400">
              <li>انتقادات و پیشنهادات</li>
              <li>نظرسنجی</li>
              <li>فرصت های شغلی</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
