import AboutFinder from "./Finder/AboutFinder";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useWindowSize } from "../../../hooks/useWindowSize";
import classes from "./About.module.css";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 425;
  const desktopOffset = ["0 0.9", "0.8 1"];
  const mobileOffset = ["0 0.9", "0.4 1"];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? mobileOffset : desktopOffset,
  });
  const xPositionImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [500, 0])
  );

  return (
    <div ref={containerRef} className={classes["section__content"]}>
      <motion.div
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
