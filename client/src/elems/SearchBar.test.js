import React from "react";
import { mount, shallow } from "enzyme";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("Uses sendFunction property on click", () => {
    const sendFunction = jest.fn();
    const component = mount(<SearchBar sendFunction={sendFunction} />);
    component.find("IconButton").simulate("click");
    expect(sendFunction).toHaveBeenCalled();
  });
  it("Uses sendFunction property on enter", () => {
    const sendFunction = jest.fn();
    const component = mount(<SearchBar sendFunction={sendFunction} />);
    const e = {
      target: {
        value: "Hello World"
      },
      key: "Enter"
    };
    component.find("input").simulate("change", e);
    component.find("input").simulate("keypress", e);
    expect(sendFunction).toHaveBeenCalledWith("Hello World");
  });
  it("Does nothing if keypressed is not enter", () => {
    const sendFunction = jest.fn();
    const e = {
      key: "Tab"
    };
    const component = mount(<SearchBar sendFunction={sendFunction} />);
    component.find("input").simulate("keypress", e);
    expect(sendFunction).not.toHaveBeenCalled();
  });
});
