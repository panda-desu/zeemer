// TitleSec.js
import React from "react";

const TitleSec = () => {
  return (
    <div className="relative mb-[400px] sm:mb-[150px]">
      <img src="bgimg.png" alt="img" />
      <div className="absolute top-20 sm:top-[188px] sm:inset-x-[15%] inset-x-[2%] z-10">
        <p className="text-center text-xl sm:text-6xl font-bold ">
          Generative AI and Games <br /> in Credit Score
        </p>
        <p className="text-center text-[12px] font-bold sm:text-lg mt-10 sm:mt-20">
          Our neuroscience-based games are designed to uncover insightful
          behavioral data about <br /> borrowers, aiming to{" "}
          <span className="text-[#FF3F3F]">reduce default rates</span> and{" "}
          <span className="text-[#30BD4F]">increase approval rates</span>{" "}
          efficiently.
        </p>
        <div className="flex justify-center mt-10 sm:mt-20">
          <a
            href="https://wza71rx9t03.typeform.com/to/tVGXElVg"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-5 bg-black rounded-2xl text-lg text-white hover:bg-white hover:border-2 hover:border-black hover:text-black"
          >
            Learn more{" "}
          </a>
        </div>
        <div className="mt-20 flex items-center justify-between">
          <img
            className="w-[120px] sm:w-[200px] sm:h-full"
            src="./partner/silkway.png"
            alt="silkway"
          />
          <img
            className="w-[120px] sm:w-[200px] sm:h-full"
            src="./partner/microsoft.png"
            alt="microsoft"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleSec;
