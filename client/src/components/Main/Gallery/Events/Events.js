import React from "react";

import classes from "./Events.module.css";

import Event1 from "../../../../assets/images/event1/E1.jpg";
import Event2 from "../../../../assets/images/event2/E2.jpg";
import Event3 from "../../../../assets/images/event3/E3.jpg";

import Event from "./Event/Event";

const Events = (props) => (
  <div className={classes.Events}>
    <Event link="/gallery/Event1" picture={Event1}>
      Event1
    </Event>
    <Event link="/gallery/Event2" picture={Event2}>
      Event2
    </Event>
    <Event link="/gallery/Event3" picture={Event3}>
      Event3
    </Event>
  </div>
);

export default Events;
