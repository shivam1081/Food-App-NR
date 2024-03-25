import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // it is basically for grouping the test cases
  // Name of the function can be test OR it also. It is just a alias name. There is no difference.

  // This will run before all the test cases
  beforeAll(() => {
    // console.log("Before All");
  });

  // This will run before each TCs
  beforeEach(() => {
    // console.log("Before Each");
  });

  afterAll(() => {
    // console.log("After all the TCs");
  });

  afterEach(() => {
    // console.log("After each");
  });


  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button Inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit"); // get by role is the role of the component
    expect(button).toBeInTheDocument();
  });

  test("Should load Input Name Inside Contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name"); // get by role is the role of the component
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
