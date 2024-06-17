import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="md:mt-36 mt-10">
        <h1 className="text-4xl font-semibold text-center">About me</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center md:items-start gap-10 mt-20 md:mx-60 mx-10">

        <div className="basis-1/3">
          <img
            src="/IMG_6770-01.jpg"
            alt=""
            className="md:max-w-96 max-w-56 rounded-3xl"
          />
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex w-full text-center justify-center flex-col border-2 gap-2 border-gray-400 rounded-xl p-2 md:max-w-md">
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
            <h3 className="text-xl font-medium">Education</h3>
            <p className="text-gray-500 text-sm">
              B.Tech, Mechanical Engineering - 2023
            </p>
            <p className="text-gray-500 text-sm">
              Diploma, Mechanical Engineering - 2020
            </p>
          </div>

          {/* <div className="border-2 border-gray-400 text-sm rounded-xl p-4"> */}
          <div>
            <p className="text-gray-500">
              A MERN Stack Developer with Mechanical Engineering background.
              But my passion led me to the world of web development, where I've
              become proficient in MERN stack. I'm now eager to leverage this
              experience to contribute to a creative and innovative software
              development team...
            </p>
          </div>


        </div>
      </div>
    </>
  );
}

export default About;
