import React from "react";
import useFetch from "fetch-suspense";
import { mount } from "enzyme";

import GetResults from "./GetResults.js";

jest.mock("fetch-suspense");

describe("GetResults", () => {
  it("Renders Results with empty data", () => {
    useFetch.mockImplementation(() => {
      return [];
    });
    const component = mount(<GetResults query="red" openInfo={() => {}} />);
    expect(component.find("Results").prop("query")).toEqual("red");
    expect(component.find("Results").prop("panels")).toEqual([]);
  });
  it("Renders Results with data", () => {
    useFetch.mockImplementation(() => {
      return [
        {
          sku: "T1022E009-602",
          name: "Tommy Hilfiger Tailored Shirt - new kelly green",
          price: 69.99,
          imgUrl:
            "https://mosaic03.ztat.net/vgs/media/pdp-gallery/T/1/T1022E009-602@1.jpg"
        },
        {
          sku: "TO122F045-302",
          name: "Tommy Hilfiger NORTH - Shirt - apple red/ classic white",
          price: 69.99,
          imgUrl:
            "https://mosaic03.ztat.net/vgs/media/pdp-gallery/TO/12/2F/04/53/02/TO122F045-302@1.jpg"
        },
        {
          sku: "ES122E00C-502",
          name: "Esprit POP - Shirt - blue / red / white",
          price: 21.99,
          imgUrl:
            "https://mosaic03.ztat.net/vgs/media/pdp-gallery/E/S/ES122E00C-502@1.jpg"
        }
      ];
    });
    const component = mount(<GetResults query="red" openInfo={() => {}} />);
    expect(component.find("Results").prop("query")).toEqual("red");
    expect(component.find("Results").prop("panels")).toHaveLength(3);
  });
  it("Renders error message instead of Results if useFetch returns an error", () => {
    useFetch.mockImplementation(() => {
      return "Something went wrong..";
    });
    const component = mount(<GetResults query="red" openInfo={() => {}} />);
    expect(component.find("Results")).toHaveLength(0);
  });
});
