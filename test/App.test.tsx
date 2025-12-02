import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("renders Vite + React heading", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("renders logos", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is/i });

    // initial value
    expect(button).toHaveTextContent("count is 0");

    // click increments
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  it("renders hassan baig text", () => {
    render(<App />);
    expect(screen.getByText("hassan baig")).toBeInTheDocument();
  });
});
