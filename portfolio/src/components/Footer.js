import React, { useEffect } from "react";

const Footer = () => {

    const goToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    useEffect(()=>{
        goToTop()
    })
  return (
    <div className="bg-[#1F1F20] ">
      <div className="w-11/12 mx-auto flex justify-between  items-center h-[150px]">
        <div className="space-x-6">
          <a href="Resume">
            <i class="ri-github-fill icons"></i>
          </a>
          <a href="Resume">
            <i class="ri-linkedin-box-fill icons"></i>
          </a>
        </div>
        <div>
            <p className="text-[16px] text-white">Made with ❤ by Abhishek</p>
        </div>
        <div>
         <span className="icons cursor-pointer" >< i class="ri-arrow-up-line" onClick={goToTop}></i></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
