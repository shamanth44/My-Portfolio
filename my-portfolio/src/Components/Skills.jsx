import React from "react";
import SkillCard from "./SkillCard";
import { allSkills } from "./AllSkill";

function Skills() {
  return (
    <>
      <div className="md:mt-36 mt-10">
        <h1 className="text-4xl font-semibold text-center">Skills</h1>
      </div>

      <div className="mt-10 md:mx-40 mx-10 mb-10">
        <h2 className="border-b text-xl text-gray-600 p-2">Framework, Library, Tools and Technologies</h2>
        <div className="flex gap-20 flex-wrap md:justify-between mt-6">
          {allSkills.map((item, index)=>{
            return(
              <SkillCard key={index} heading={item.heading} item={item.skillIcon}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
