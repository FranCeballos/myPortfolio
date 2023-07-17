import AboutFinder from "./Finder/AboutFinder";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useWindowSize } from "../../../hooks/useWindowSize";
import classes from "./About.module.css";

const About = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 425;
  const desktopOffset = [0.3, 0.8];
  const mobileOffset = [0.05, 0.4];
  console.log(windowSize);
  console.log(isMobile);

  const { scrollYProgress } = useScroll({
    offset: isMobile ? mobileOffset : desktopOffset,
  });
  const xPositionImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [500, 0])
  );

  return (
    <div className={classes["section__content"]}>
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
      <AboutFinder />
    </div>
  );
};

export default About;
