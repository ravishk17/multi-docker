import React from "react";

import classes from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";

const style = {
  height: "250px",
  backgroundColor: "hsl(186, 86%, 58%)",
  alignItem: "center",
  width: "100%",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const toolbar = (props) => (
  <div style={style}>
    <header className={classes.Toolbar}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  </div>
);

export default toolbar;
