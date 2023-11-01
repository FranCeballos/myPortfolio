import React from "react";
import classes from "./AboutMe.module.css";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
      },
    },
  },
  exit: {
    transition: {
      duration: 0.05,
    },
  },
};

const AboutMe = (props) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes.container}
    >
      <p className={classes.text}>
        Welcome to my digital playground, where pixels and code come together to
        craft captivating online experiences. <br />
        <br />
        I'm dedicated to transforming creative visions into interactive reality.
        <br />
        <br />
        With a keen eye for design and a mastery of CSS, React and Next.js, I
        bring websites to life, ensuring they not only look stunning but also
        function flawlessly across various devices.
        <br />
        <br />
        Let's create a web presence that leaves a lasting impression.
      </p>
    </motion.div>
  );
};

export default AboutMe;
