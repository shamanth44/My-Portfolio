import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function Skill(items) {
    const skillIcon = items.items
  return (
    <>
      <div className="flex gap-2 text-black p-4 items-center">
        <div className="text-sm text-green-800 font-semibold"><FontAwesomeIcon icon={faCheckCircle} /></div>
        <h3>{skillIcon.skill}</h3>
      </div>
    </>
  );
}

export default Skill;
