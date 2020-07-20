import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", value: 70 },
    { name: "Node js", value: 40 },
    { name: "CSS", value: 60 },
    { name: "Javascript", value: 70 },
  ];
  return (
    <div className="Skills card">
      <h3>Skills</h3>
      {skills.map(({ name, value }, index) => (
        <li key={index}>
          <label htmlFor={name}>{name}</label>
          <progress id={name} value={value} max="100" />
        </li>
      ))}
    </div>
  );
};

export default Skills;
