import { screen, render } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test.skip("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);
  });
});
