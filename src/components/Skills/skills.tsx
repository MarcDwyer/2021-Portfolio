import React from "react";
import { nanoid } from "nanoid";
import { NewTheme } from "../../themes";

import "./skills.scss";

function Skills() {
  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "NodeJS",
    "Deno",
    "Go",
  ];
  return (
    <div className="skills-intro">
      <h2>Most commonly used technologies:</h2>
      <div className="tech-skills">
        {skills.map((skill) => {
          return (
            <span
              key={nanoid(5)}
              style={{ borderColor: NewTheme.borderColor }}
              className="inner-skill"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
