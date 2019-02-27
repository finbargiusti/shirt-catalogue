import React from "react";
import { mount, shallow } from "enzyme";
import ItemCard from "./Card.js";

const component = mount(
  <ItemCard
    id="id123"
    name="Title"
    imgUrl="placekitten"
    price="1999"
    openInfo={id => {
      return id;
    }}
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
});
