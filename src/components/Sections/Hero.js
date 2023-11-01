import { useRef } from "react";
import { motion } from "framer-motion";

import ParallaxOnScroll from "../UI/AnimatedComponents/ParallaxOnScroll";

import classes from "./Hero.module.css";

const Hero = () => {
  const titleRef = useRef(null);
  return (
    <motion.section className={classes.container}>
      <ParallaxOnScroll ref={titleRef}>
        <motion.div ref={titleRef} className={classes["title__container"]}>
          <motion.h1
            initial={{ scale: 10, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 3,
              delay: 0.5,
              type: "spring",
            }}
            className={classes.title}
          >
            Hello! I'm Francisco,
            <br /> Front End Developer.
          </motion.h1>
        </motion.div>
      </ParallaxOnScroll>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 3,
          delay: 1.5,
          type: "spring",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.5,
        }}
        className={classes["bar1"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 3,
          delay: 1.3,
          type: "spring",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.5,
        }}
        className={classes["bar2"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 3,
          delay: 1.5,
          type: "spring",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.5,
        }}
        className={classes["bar3"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 3,
          delay: 1.3,
          type: "spring",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.5,
        }}
        className={classes["bar4"]}
      ></motion.div>
    </motion.section>
  );
};

export default Hero;
