import React, { useState } from "react";
import "../components/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" shadow-md ">
        <div className="flex justify-between items-center h-[70px] w-11/12 mx-auto">
          <div>
            <h1 className="text-[18px] font-bold">Abhishek</h1>
          </div>
          <div className="space-x-6 md:flex hidden">
            <a
              href="Home"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Home
            </a>
            <a
              href="About"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              About
            </a>
            <a
              href="Projects"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Projects
            </a>
            <a
              href="Projects"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Skills
            </a>
          </div>
          <div className="space-x-6 md:flex hidden">
            <a href="Resume">
              <i class="ri-github-fill icon"></i>
            </a>
            <a href="Resume">
              <i class="ri-linkedin-box-fill icon"></i>
            </a>
          </div>
          <div className="md:hidden cursor-pointer">
            {
              show ? (< i class="ri-close-fill icon" onClick={()=>setShow(!show)}></i>) : (  <i class="ri-menu-line icon " onClick={() => setShow(!show)}></i>)
            }
          
          </div>
        </div>
      </div>
      {
        show && 
        <div className="shadow-md bg-red-400">
           <div className="space-x-6 md:hidden flex">
            <a
              href="Home"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Home
            </a>
            <a
              href="About"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              About
            </a>
            <a
              href="Projects"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Projects
            </a>
            <a
              href="Projects"
              className="text-[16px] font-semibold  px-3 py-2 hover:bg-[#EAEAF1] hover:rounded text-[#334155]"
            >
              Skills
            </a>
          </div>
          <div className="space-x-6 md:hidden flex">
            <a href="Resume">
              <i class="ri-github-fill icon"></i>
            </a>
            <a href="Resume">
              <i class="ri-linkedin-box-fill icon"></i>
            </a>
          </div>
        </div>

      }
    </>
  );
};

export default Navbar;
