import React from "react";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto mt-[150px]">
      <div>
        <h1 className="text-[32px] font-bold">My Skills</h1>
      </div>
      <div className="grid md:grid-cols-4 gap-10 mt-8 grid-cols-2">
        <div className="">
          <i class="ri-html5-fill icon-html"></i>
          <p className="text-[23px] font-normal">HTML</p>
        </div>
        <div>
          <i class="ri-css3-fill icon-css"></i>
          <p className="text-[23px] font-normal">CSS</p>
        </div>
        <div className="mt-3">
          <i class="ri-javascript-fill ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNZ5WS3jYB2Yzock7sgN-ONLrQQjS5ptRXzWEjac&s"
              className="icon-js"
            />
          </i>
          <p className="text-[23px] font-normal mt-4">JavaScript</p>
        </div>
        <div>
          <i class="ri-reactjs-fill icon-react"></i>
          <p className="text-[23px] font-normal">React</p>
        </div>

        <div>
          <i class="ri-github-fill icon-git"></i>
          <p className="text-[23px] font-normal">Git/Github</p>
        </div>
        <div className="mt-6">
          <i class="ri-javascript-fill ">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
              className="icon-jss"
            />
          </i>
          <p className="text-[23px] font-normal mt-4">Tailwind CSS</p>
        </div>
      </div>
      <div className="mt-20">
        <hr />
      </div>
    </div>
  );
};

export default Skills;
