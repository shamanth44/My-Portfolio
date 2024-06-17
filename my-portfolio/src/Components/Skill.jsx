import React from "react";

function Skill(items) {
    const skillIcon = items.items
  return (
    <>
      <div className="flex gap-2 text-black p-4 items-center">
        <div className="text-3xl font-semibold">{skillIcon.icon}</div>
        <h3>{skillIcon.skill}</h3>
      </div>
    </>
  );
}

export default Skill;
