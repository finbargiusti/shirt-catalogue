import React from "react";
import { Info } from "index";
import useFetch from "fetch-suspense";

const GetInfo = ({ query }) => {
  const data = useFetch("/info", {
    method: "post",
    body: JSON.stringify({
      query
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return <Info data={data} />;
};

export default GetInfo;
