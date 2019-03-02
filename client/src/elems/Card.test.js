import React from "react";
import { mount, shallow } from "enzyme";
import ItemCard from "./Card.js";

const openInfo = jest.fn();

const component = mount(
  <ItemCard
    id="id123"
    name="Title"
    imgUrl="placekitten"
    price="1999"
    openInfo={openInfo}
  />
);

describe("ItemCard", () => {
  it("Places static props correctly", () => {
    expect(
      component
        .find("Typography")
        .first()
        .text()
    ).toEqual("Title");
    expect(component.find("CardMedia").prop("image")).toEqual("placekitten");
  });
  it("Triggers openInfo function on click", () => {
    component.find("Card").simulate("click");
    expect(openInfo).toHaveBeenCalled();
  });
});
