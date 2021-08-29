import React from "react";

const LoginMenu = (props) => {
  return (
    <div className="bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-sm fixed left-0 right-0 top-0 bottom-0">
      <div className="bg-white  z-50 rounded-2xl shadow-lg m-5 p-5 text-purple-800 overflow-auto md:h-auto md:w-1/3 md:mx-auto md:my-10">
        <button
          className="relative px-3 py-1 rounded-sm left-0 bottom-0 focus:bg-purple-400 focus:text-white"
          onClick={props.onClose}
        >
          بستن
        </button>
        <h1 className="logo text-2xl text-center">همسفر</h1>
        <p className="text-gray-600 pt-3 ">
          برای استفاده از امکانات بیشتر همسفر بهتر است لطفا وارد حساب کاربری خود
          شوید.
        </p>
        <span className="flex flex-col p-5">
          <input
            type="text"
            placeholder="ایمیل"
            className="p-2 border-2 my-1 rounded-md border-purple-400"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="p-2 my-1 mb-2 border-2 rounded-md border-purple-400"
          />
          <button className="px-3 py-3 rounded-lg text-lg bg-purple-500 text-white focus:bg-purple-800 hover:bg-purple-400 focus:text-white">
            ورود
          </button>
        </span>
        <div>
          <div className="text-center pb-2">
            <p className="text-gray-600 pt-3 text-sm ">روش های دیگر ورود</p>
            <ul className="flex justify-around pt-5">
              <li>گوگل</li>
              <li>ثبت نام</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMenu;
