import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex items-center mt-[120px] ">
        <div className=" md:w-[70%]">
          <h1 className="text-[32px] font-bold leading-[42px]">About Me</h1>
          <p className="text-[20px] font-normal leading-[33px] pt-5">
            Hi I am Abhishek Singh, a 21 year old Front-End developer living in
            Gorakhpur, India I am a Computer Science graduate Have a look at my
            Projects, I am always excited in exploring things and learning new
            things. As a skilled front-end developer with expertise in
            Html,css,javascript,React and I am dedicated to creating seamless,
            visually appealing, and user-friendly websites and applications.
            With a keen eye for detail, I ensure that every aspect of my
            projects is pixel-perfect and optimized for optimal user experience.
          </p>
        </div>
        <div className="ml-10 md:w-1/4">
          <img src={profile} alt="profile" className="img-round" />
        </div>
      </div>
      <div className="mt-20 w-11/12 mx-auto">
        <hr />
      </div>
    </>
  );
};

export default About;
