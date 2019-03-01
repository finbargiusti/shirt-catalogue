import React, { useState, useEffect } from "react";
import close from "./close.svg";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "./Info.css";
import {
  Badge,
  CircularProgress,
  createMuiTheme,
  MuiThemeProvider,
  Button
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffcc80"
    },
    primary: {
      main: "#f57c00"
    }
  }
});

export const InfoHolder = ({ closeInfo, children }) => {
  return (
    <div className="infoWrapperWrapper">
      <Paper className="infoWrapper" elevation={10}>
        <CloseButton closeInfo={closeInfo} />
        {children}
      </Paper>
    </div>
  );
};

const CloseButton = ({ closeInfo }) => {
  return (
    <div className="closeWrapper">
      <img src={close} onClick={closeInfo} />
    </div>
  );
};

export const Info = ({ data }) => {
  // const [galleryFullScreen, setGalleryFullScreen] = useState(false);
  const [fashion, setFashion] = useState(0);

  useEffect(() => {
    if (data.fashion_score) {
      setTimeout(() => {
        setFashion(data.fashion_score * 20);
      }, 1000);
    }
  });

  return (
    <div>
      <Typography variant="h5" gutterBottom align="center">
        <Badge color="error" badgeContent="Sale" invisible={!data.is_sale}>
          {data.meta_title}
        </Badge>
      </Typography>
      <Slider className={"carousel "} arrows={true}>
        {data.gallery_images.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="galleryItem"
                src={"https://mosaic03.ztat.net/vgs/media/pdp-gallery/" + item}
              />
            </div>
          );
        })}
      </Slider>
      <div className="extraInfo">
        <ul class="washingInstructions">
          {data.washing_instructions &&
            data.washing_instructions.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
        {!isNaN(data.fashion_score) && (
          <div className="score">
            <p>Fashion Rating:</p>
            <MuiThemeProvider theme={theme}>
              <CircularProgress
                variant="static"
                className="background"
                disableShrink
                value={100}
                color="secondary"
                size={75}
                thickness={10}
              />
              <CircularProgress
                variant="static"
                value={fashion}
                color="primary"
                size={75}
                thickness={10}
              />
            </MuiThemeProvider>
          </div>
        )}
        <div className="price-buy">
          <MuiThemeProvider theme={theme}>
            <span>
              <b>{"£" + data.price / 100}</b>
            </span>
            <Button color="primary" variant="contained">
              Buy
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    </div>
  );
};
