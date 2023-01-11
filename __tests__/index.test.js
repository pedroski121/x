import Home from "../src/pages/index"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("navbar", () => {
    it("renders a navbar", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("nav_bar")).toBeInTheDocument();
    });
  });