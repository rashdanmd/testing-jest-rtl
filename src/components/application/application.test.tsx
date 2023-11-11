import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      //   name: "Job Application Form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const pElement = screen.getByText("All fields are mandatory");
    expect(pElement).toBeInTheDocument();

    const nameElem = screen.getByRole("textbox", { name: "Name" });
    expect(nameElem).toBeInTheDocument();

    /***** getBy - LabelText ******/
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const agreeLabel = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(agreeLabel).toBeInTheDocument();

    const bioElem2 = screen.getByLabelText("Bio");
    expect(bioElem2).toBeInTheDocument();

    // const name2 = screen.getByLabelText("Name", { selector: "name" });
    // expect(name2).toBeInTheDocument();
    /***** getBy - LabelText ******/

    const bioElem = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElem).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsConditionsElement = screen.getByRole("checkbox");
    expect(termsConditionsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    const namePlaceholder = screen.getByPlaceholderText(/Full Name/i);
    expect(namePlaceholder).toBeInTheDocument();

    /*****  getBy DisplayValue  ****/
    const nameDisplayValue = screen.getByDisplayValue("John Doe");
    expect(nameDisplayValue).toBeInTheDocument();
    /*****  getBy DisplayValue  ****/

    /*****  getBy AltText  ****/
    const imgAltText = screen.getByAltText("brown shoes with laces");
    expect(imgAltText).toBeInTheDocument();
    /*****  getBy AltText  ****/

    /*****  getBy Title  ****/
    const closeElem = screen.getByTitle("close");
    expect(closeElem).toBeInTheDocument();
    /*****  getBy Title  ****/

    /*****  getBy TestId ****/
    const customElem = screen.getByTestId("custom-element");
    expect(customElem).toBeInTheDocument();

    /*****  getBy TestId  ****/
  });
});
