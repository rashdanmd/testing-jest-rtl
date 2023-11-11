import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const text = screen.getByText(/Hello/i);
//   expect(text).toBeInTheDocument();
// });

describe.skip("Greet", () => {
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
