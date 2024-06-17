import React from "react";
import { allSkills } from "./AllSkill";
import Skill from "./Skill";

function SkillCard({heading, item}) {
  return (
    <>
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-gray-400">{heading}</h2>
        <div className="border-l border-t">
          {item.map((items, index)=>{
            return(
              <Skill key={index} items={items}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default SkillCard;
