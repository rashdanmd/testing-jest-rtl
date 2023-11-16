import { skillsProps } from "./skills.types";

const Skills: React.FC<skillsProps> = ({ skills }) => {
  return (
    <>
      <ul>
        <li></li>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

// const Skills = (props: skillsProps) => {
//   return (
//     <>
//       <ul>
//         <li></li>
//         {props.skills.map((skill) => (
//           <li key={skill}>{skill}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default Skills;
