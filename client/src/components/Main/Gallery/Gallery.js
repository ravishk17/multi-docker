import React, { Component } from "react";
import Aux from "../../../hoc/Auxy/Auxy";
import classes from "./Gallery.module.css";
import { Route } from "react-router-dom";
import Events from "./Events/Events";
// import DetailedEvent1 from "./DetailedEvents/DetailedEvent1"

class Gallery extends Component {
  render() {
    return (
      <Aux classname={classes.Gallery}>
        <Route path="/gallery" exact component={Events} />
        {/* <Route path="/gallery/event1" component={DetailedEvent1} /> */}
        {/* <Route path="/gallery/event2" component={DetailedEvent2} /> */}
        {/* <Route path="/gallery/event3" component={DetailedEvent3} /> */}
      </Aux>
    );
  }
}

export default Gallery;
