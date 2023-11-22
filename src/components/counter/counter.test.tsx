import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const IncrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(IncrementBtn).toBeInTheDocument();
  });

  // testing state
  test("renders a count of O", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const IncrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(IncrementBtn);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const IncrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(IncrementBtn);
    await user.click(IncrementBtn);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });

    await user.click(setBtn);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("10");
  });
});
