import React from "react";
import Loading from "./Loading";
import { mount } from "enzyme";
import loadingGif from "./loading.gif";

describe("Loading", () => {
  it("Returns loading Gif into img component", () => {
    const Component = mount(<Loading />);

    expect(Component.find("img").prop("src")).toEqual(loadingGif);
  });
});
