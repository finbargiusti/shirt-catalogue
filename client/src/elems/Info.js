import React, { useState } from "react";
import close from "./close.svg";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "./Info.css";

export const InfoHolder = ({ closeInfo, children }) => {
  return (
    <div className="infoWrapperWrapper">
      <Paper className="infoWrapper">
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
  const [galleryFullScreen, setGalleryFullScreen] = useState(false);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {data.meta_title}
      </Typography>
      <Slider className={"carousel "} arrows={true}>
        {data.gallery_images.map((item, index) => {
          return (
            <div>
              <img
                key={index}
                className="galleryItem"
                src={"https://mosaic03.ztat.net/vgs/media/pdp-gallery/" + item}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
