import React from "react";
import { mount, shallow } from "enzyme";
import { Info, InfoHolder } from "./Info";
import Typography from "@material-ui/core/Typography";

const closeInfo = jest.fn();

const Child = () => <p>Hello World</p>;

const InfoHolderComponent = mount(
  <InfoHolder closeInfo={closeInfo}>
    <Child />
  </InfoHolder>
);

describe("InfoHolder", () => {
  it("Outputs children into Paper", () => {
    expect(InfoHolderComponent.find(Child).length).toEqual(1);
  });
  it("Triggers closeInfo func on click to img", () => {
    InfoHolderComponent.find("img").simulate("click");
    expect(closeInfo).toHaveBeenCalled();
  });
});

const data = {
  meta_title: "Title",
  gallery_images: ["img1", "img2"]
};

const InfoComponent = shallow(<Info data={data} />);

const imgPrefix = "https://mosaic03.ztat.net/vgs/media/pdp-gallery/";

describe("Info", () => {
  it("Puts props in correct places", () => {
    expect(
      InfoComponent.find(Typography)
        .at(0)
        .render()
        .text()
    ).toEqual("Title");
    expect(
      InfoComponent.find("img")
        .first()
        .prop("src")
    ).toEqual(imgPrefix + "img1");
    expect(
      InfoComponent.find("img")
        .at(1)
        .prop("src")
    ).toEqual(imgPrefix + "img2");
  });
});
