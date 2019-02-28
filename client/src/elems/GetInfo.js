import React from "react";
import { Info } from ".";
import useFetch from "fetch-suspense";
import { Typography } from "@material-ui/core";
import { object } from "prop-types";

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

  if (
    !(typeof data === "object" && data !== null) ||
    !Object.keys(data).length
  ) {
    return <Typography>Something went wrong!</Typography>;
  }

  return <Info data={data} />;
};

export default GetInfo;
