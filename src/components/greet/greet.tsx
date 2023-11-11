import { GreetProps } from "./greet.types";

// export const Greet = () => {
//   return <div>hello</div>;
// };

// TDD approach - brief for RED-GREEN approach
// *Greet should the text hello
// *It should render hello followed by the name

// type GreetProps = {
//   name?: string;
// };

// export const Greet = (props: GreetProps) => {
//   return <div>hello {props.name}</div>;
// };

export const Greet = ({ name }: GreetProps) => {
  return <div>hello {name}</div>;
};
