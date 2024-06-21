import React from "react";
import Button from "./Button";

function ProjectCard({title, src, href, gitLink}) {
  return (
    <>
      <div className="mt-10 max-w-80 rounded-3xl gap-4 flex items-center flex-col border-2 border-gray-400 p-6">
        <div className="">
          <img
            src={src}
            className="md:w-80 w-52 rounded-md"
            alt="profile"
          />
        </div>
        <h2 className="text-center font-semibold text-2xl">{title}</h2>
        <div className="flex justify-evenly gap-2 w-full">
        <Button label={"Github"} href={gitLink} size={"xs"} width={"32"}/>
        <Button label={"Live Demo"} href={href} size={"xs"} width={"32"}/>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
