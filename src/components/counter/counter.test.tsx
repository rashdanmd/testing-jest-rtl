import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("counter", () => {
  test("counter renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    expect(incrementBtn).toBeInTheDocument();
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 3", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    expect(incrementBtn).toBeInTheDocument();
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("3");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setBtn = screen.getByRole("button", { name: /set/i });
    expect(setBtn).toBeInTheDocument();
    await user.click(setBtn);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("10");
  });

  test("focus elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const amountInput = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: /set/i });
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});

/*
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
*/
