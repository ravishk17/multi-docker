import React from "react";

import { Fade } from "react-slideshow-image";
import image1 from "../../../../assets/images/B1.jpg";
import image2 from "../../../../assets/images/B2.jpg";
import image3 from "../../../../assets/images/B3.jpg";
import classes from "./Slideshow.module.css";

const fadeImages = [image1, image2, image3];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = (props) => (
  <div className={classes.slideContainer}>
    <Fade {...fadeProperties}>
      <div className={classes.eachFade}>
        <div className={classes.imageContainer}>
          <img src={fadeImages[0]} alt="pic-1" />
        </div>
      </div>
      <div className={classes.eachFade}>
        <div className={classes.imageContainer}>
          <img src={fadeImages[1]} alt="pic-2" />
        </div>
      </div>
      <div className={classes.eachFade}>
        <div className={classes.imageContainer}>
          <img src={fadeImages[2]} alt="pic-3" />
        </div>
      </div>
    </Fade>
  </div>
);

export default Slideshow;
