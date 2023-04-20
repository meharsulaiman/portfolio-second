import React from 'react';

const Header = () => {
  return (
    <div className=" mt-10 flex flex-col justify-around py-5 md:mt-16 md:flex-row md:items-center">
      <div className="flex basis-1/2 flex-col space-y-2 text-center text-4xl font-bold text-gray-100">
        <div className="border-home animate-[to-right_200ms_ease-in-out] bg-amber-300 md:py-2 lg:py-4">
          <h1>MERN Stack</h1>
        </div>
        <div className="border-home--one animate-[to-right_500ms_ease-in-out] bg-blue-300 md:py-2 lg:py-4">
          <h1>Developer & Bug</h1>
        </div>
        <div className="border-home animate-[to-right_750ms_ease-in-out] bg-orange-300 md:py-2 lg:py-4">
          <h1>Fixer</h1>
        </div>
      </div>
      <div className="mt-5 flex basis-1/2 items-center justify-center md:mt-0">
        <img
          className="w-full animate-to-left sm:w-3/4 md:w-3/5"
          src="/header-image-mehar-sulaiman-mern-stack-developer.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
