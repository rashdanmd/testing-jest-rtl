import { screen, render, logRoles } from "@testing-library/react";
import SkillsTwo from "./skillsTwo";

describe("SkillsTwo", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<SkillsTwo skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<SkillsTwo skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<SkillsTwo skills={skills} />);
    const logInBtn = screen.getByRole("button", { name: "Login" });
    expect(logInBtn).toBeInTheDocument();
  });

  test("Start learning button", () => {
    render(<SkillsTwo skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("Start Learning button is eventually displays", async () => {
    render(<SkillsTwo skills={skills} />);
    // screen.debug();
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningBtn).toBeInTheDocument();
  });
});
