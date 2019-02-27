import React from "react";
import useFetch from "fetch-suspense";
import Results from "./Results";

const GetResults = ({ query, openInfo }) => {
  const data = useFetch("/search", {
    method: "post",
    body: JSON.stringify({
      query
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!Array.isArray(data)) {
    return <p>Something went wrong, try again later.</p>;
  }

  return <Results query={query} panels={data} openInfo={openInfo} />;
};

export default GetResults;
