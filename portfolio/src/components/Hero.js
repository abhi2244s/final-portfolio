import React from "react";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto mt-[120px] ">
      <div className="">
        <h1 className="text-[20px] font-normal">👋 Hi, I am Abhishek Singh.</h1>
      </div>
      <div className="mt-6">
        <h1 className="font-bold text-[72px] leading-[82px]">
          Front-End Developer
        </h1>
      </div>
      <div className="mt-6">
        <p className="text-[20px] font-normal w-[70%] leading-[34px]">
          A self-motivated frontend web developer from
          Gorakhpur,India.Interested in exploring things, I like to work on
          exciting projects.
        </p>
      </div>
      <div className="mt-8 space-x-12">
        <button className="bg-black text-white text-[16px] font-normal p-3 px-5 py-3 rounded-md">
          Contact Me
        </button>
        <button className="border-solid border-black border-[1px] text-black text-[16px] font-normal p-3 px-5 py-3 rounded-md">
          Resume
        </button>
      </div>

      <div className="mt-20">
        <hr />
      </div>
    </div>
  );
};

export default Hero;
