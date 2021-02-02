import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <h2>About me
      <p>Aint she nice</p>
      <img src = {image} alt= 'I made this'></img>
    </h2>
  </div>;
}

export default About;
