import React from "react";

const Header = () => {
  return (
    <div className="border-b-2">
      <div className="px-4 w-full sm:w-10/12 sm:m-auto  ">
        <div className="flex py-3  justify-between items-center">
          <div className="flex items-center">
            <img src="./Logo.png" alt="logo" />
            <p className="sm:text-xl text-base font-bold ms-4">zeemer.ai</p>
          </div>
          <div>
            <a
              href="https://wza71rx9t03.typeform.com/to/tVGXElVg"
              target="_blank"
              rel="noreferrer"
              className="py-2 sm:px-5 px-2 bg-black rounded-lg sm:text-xl text-base text-white
          hover:bg-white hover:border-2 hover:border-black hover:text-black"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
