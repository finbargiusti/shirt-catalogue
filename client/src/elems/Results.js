import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ItemCard from "./Card";
import "./Results.css";

const Results = ({ query, panels, openInfo }) => {
  let text =
    panels.length > 0
      ? 'Results for "' + query + '"'
      : 'No results found for "' + query + '"';
  return (
    <div>
      <div className="cardWrapper">
        <Typography gutterBottom variant="h6" component="h2">
          {text}
        </Typography>
        {panels.map(({ sku, name, price, imgUrl }, i) => {
          return (
            <ItemCard
              key={i}
              id={sku}
              name={name}
              price={price}
              imgUrl={imgUrl}
              openInfo={openInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
