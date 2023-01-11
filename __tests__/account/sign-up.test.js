import SignUp from "../../src/pages/account/sign-up"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Registration page", () => {
    it("renders a form to sign up", () => {
      render(<SignUp />);
      // check if all components are rendered
      expect(screen.getByTestId("sign-up-form")).toBeInTheDocument();
      expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole('signUp')).toBeInTheDocument()

    });
  });