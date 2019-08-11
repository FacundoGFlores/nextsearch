import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../Search";

const onChange = jest.fn();
const onEnter = jest.fn();

const props = {
  onChange,
  onEnter
};

describe("Components - Search", () => {
  it("should call onChange with the input value", () => {
    const { getByPlaceholderText } = render(<Search {...props} />);

    const inputComponent = getByPlaceholderText("Search...");

    fireEvent.change(inputComponent, { target: { value: "foo" } });

    expect(onChange).toHaveBeenCalledWith("foo");
  });

  it("should call onEnter when blur occurs", () => {
    const { getByPlaceholderText } = render(<Search {...props} />);

    const inputComponent = getByPlaceholderText("Search...");

    fireEvent.blur(inputComponent);

    expect(onEnter).toHaveBeenCalled();
  });

  it("should call onEnter when user press Enter key while focusing input", () => {
    const { getByPlaceholderText } = render(<Search {...props} />);

    const inputComponent = getByPlaceholderText("Search...");

    fireEvent.focus(inputComponent);
    fireEvent.keyPress(inputComponent, {
      key: "Enter",
      code: 13,
      charCode: 13
    });

    expect(onEnter).toHaveBeenCalled();
  });

  it("should not call onEnter when user press key different than Enter while focusing input", () => {
    const { getByPlaceholderText } = render(<Search {...props} />);

    const inputComponent = getByPlaceholderText("Search...");

    fireEvent.focus(inputComponent);
    fireEvent.keyPress(inputComponent, {
      key: "backspace",
      code: 46,
      charCode: 46
    });

    expect(onEnter).toHaveBeenCalled();
  });

  it("should render a search icon", () => {
    const { getByTestId } = render(<Search {...props} />);

    expect(getByTestId("search-icon")).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="MuiSvgIcon-root"
        data-testid="search-icon"
        focusable="false"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    `);
  });
});
