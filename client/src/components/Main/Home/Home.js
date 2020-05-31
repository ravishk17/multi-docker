import React, { Component } from "react";
import Aux from "../../../hoc/Auxy/Auxy";
import Slideshow from "./Slideshow/Slideshow";
import About from "./About/About";
class Home extends Component {
  render() {
    return (
      <Aux>
        <Slideshow />
        <About />
      </Aux>
    );
  }
}

export default Home;
