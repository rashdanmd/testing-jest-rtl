import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// it("Greet renders correctly", () => {
//   render(<Greet />);
//   const text = screen.getByText(/Hello/i);
//   expect(text).toBeInTheDocument();
// });

describe.skip("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("hello");
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly with user's name", () => {
    render(<Greet name="Moto" />);
    const textElement = screen.getByText("hello Moto");
    expect(textElement).toBeInTheDocument();
  });
});

// fit === test.only
// xit === test.skip
