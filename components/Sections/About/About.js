import AboutFinder from "./Finder/AboutFinder";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import classes from "./About.module.css";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.6 0.8"],
  });
  const xPositionImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [400, 0])
  );

  return (
    <div className={classes["section__content"]}>
      <motion.div
        ref={containerRef}
        style={{
          scale: scrollYProgress,
          translateX: xPositionImage,
          transition: { type: "spring" },
        }}
        className={classes["section__image-box"]}
      >
        <img
          src="./assets/img/profile-pic.jpg"
          alt="Profile Picture"
          className={classes["section__image"]}
        />
      </motion.div>
      <AboutFinder containerRef={containerRef} />
    </div>
  );
};

export default About;
