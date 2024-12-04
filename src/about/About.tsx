import React from "react";

import { AboutWrapper } from "./About.style";

type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <AboutWrapper>
      <span>
        <h1>Hello!</h1>
        <p>My name is Collin.</p>
      </span>
    </AboutWrapper>
  );
};

export default About;
