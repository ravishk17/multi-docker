import React, { Component } from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class navigationItems extends Component {
  render() {
    return (
      <div>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/">Home</NavigationItem>
          <NavigationItem link="/gallery">Gallery</NavigationItem>
          <NavigationItem link="/contact">Contact Us</NavigationItem>
        </ul>
      </div>
    );
  }
}

export default navigationItems;
