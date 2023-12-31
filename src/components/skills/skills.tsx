"use client";

import { useState } from "react";
import { skillsProps } from "./skills.types";

// const Skills: React.FC<skillsProps> = ({ skills }) => {
//   return (
//     <>
//       <ul>
//         {skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
const Skills = (props: skillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
