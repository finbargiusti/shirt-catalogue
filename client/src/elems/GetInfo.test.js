import React from "react";
import useFetch from "fetch-suspense";
import { mount, shallow } from "enzyme";

import GetInfo from "./GetInfo.js";

jest.mock("fetch-suspense");

describe("GetInfo", () => {
  it("Renders Error with empty data", () => {
    useFetch.mockImplementation(() => {
      return {};
    });
    const component = shallow(<GetInfo query="red" />);
    expect(component.find("Info")).toHaveLength(0);
  });
  it("Renders Results with data", () => {
    const obj = {
      id: "test"
    };
    useFetch.mockImplementation(() => {
      return obj;
    });
    const component = shallow(<GetInfo query="red" />);
    expect(component.find("Info").prop("data")).toEqual(obj);
  });
  it("Renders error message instead of Results if useFetch returns an error", () => {
    useFetch.mockImplementation(() => {
      return "Something went wrong..";
    });
    const component = mount(<GetInfo query="red" />);
    expect(component.find("Info")).toHaveLength(0);
  });
});
