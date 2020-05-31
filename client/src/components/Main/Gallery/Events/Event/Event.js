import React from "react";
import classes from "./Event.module.css";

const Event = (props) => (
  <div className={classes.Event}>
    <a href={props.link} className={props.active ? classes.active : null}>
      <img src={props.picture} alt={props.children} />
    </a>
  </div>
);

export default Event;
