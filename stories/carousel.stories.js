import React from "react";
import { storiesOf } from "@storybook/react";
import Carousel from "@prc/carousel";

import "@prc/carousel/dist/index.cjs.css";

const carouselStyles = {
  height: 300,
  width: 600
};

const slideStyle = {
  height: 300,
  width: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 40,
  background: "#cccccc"
};

storiesOf("Carousel", module).add("Carousel", () => (
  <div style={carouselStyles}>
    <Carousel>
      <div style={slideStyle}>1</div>
      <div style={slideStyle}>2</div>
      <div style={slideStyle}>3</div>
    </Carousel>
  </div>
));
