import { motion } from "framer-motion";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.container}>
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
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 1.5, type: "spring" }}
        className={classes["bar1"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 1.3, type: "spring" }}
        className={classes["bar2"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 1.5, type: "spring" }}
        className={classes["bar3"]}
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, delay: 1.3, type: "spring" }}
        className={classes["bar4"]}
      ></motion.div>
    </section>
  );
};

export default Hero;
