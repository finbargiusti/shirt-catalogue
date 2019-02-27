import React, { useState, Suspense } from "react";
import useFetch from "fetch-suspense";
import { GetResults, InfoHolder, Info, Loading, SearchBar } from "./elems";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const openInfo = id => {
    setShowInfo(id);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  const GetInfo = () => {
    const data = useFetch("/info", {
      method: "post",
      body: JSON.stringify({
        query: showInfo
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return <Info data={data} />;
  };

  const setSearch = value => {
    if (value !== "") {
      setQuery(value);
    }
  };

  return (
    <div>
      <SearchBar sendFunction={setSearch} />
      {query && (
        <Suspense fallback={<Loading />}>
          <GetResults query={query} openInfo={openInfo} />
        </Suspense>
      )}
      {showInfo && (
        <InfoHolder closeInfo={closeInfo}>
          <Suspense fallback={<Loading />}>
            <GetInfo />
          </Suspense>
        </InfoHolder>
      )}
    </div>
  );
};

export default App;
