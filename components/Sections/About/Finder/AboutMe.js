import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Welcome to my digital playground, where pixels and code come together to
        craft captivating online experiences. <br />
        I'm dedicated to transforming creative visions into interactive reality.
        With a keen eye for design and a mastery of CSS, JavaScript and React, I
        bring websites to life, ensuring they not only look stunning but also
        function flawlessly across various devices.
        <br />
        Let's create a web presence that leaves a lasting impression.
      </p>
    </div>
  );
};

export default AboutMe;
