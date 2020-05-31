import React from "react";

import cakeLogo from "../../assets/images/logo1.jpg";

import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={cakeLogo} alt="Party" />
  </div>
);

export default logo;
