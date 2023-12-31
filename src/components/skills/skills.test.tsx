import { screen, render } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const logInBtn = screen.getByRole("button", { name: "Login" });
    expect(logInBtn).toBeInTheDocument();
  });

  test("Start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });
});
