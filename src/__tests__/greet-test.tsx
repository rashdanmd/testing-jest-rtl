import { render, screen } from "@testing-library/react";
import { Greet } from "@/components/greet/greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders correctly with user's name", () => {
    render(<Greet name="Moto" />);
    const textElement = screen.getByText("hello Moto");
    expect(textElement).toBeInTheDocument();
  });
});
