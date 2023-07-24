import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import classes from "./SectionLayout.module.css";

const SectionLayout = ({
  title,
  children,
  horizontalPadding = true,
  titleMargin = true,
}) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 425;
  const desktopOffset = ["0 0.9", "1 1"];
  const mobileOffset = ["0 0.9", "0.2 1"];
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile ? mobileOffset : desktopOffset,
  });
  const titleScale = useSpring(scrollYProgress);

  return (
    <section
      className={
        horizontalPadding ? classes.container : classes["container__no-padding"]
      }
    >
      <div className={classes["title-container"]} ref={sectionRef}>
        <motion.h2
          style={{ scale: titleScale }}
          className={titleMargin ? classes.title : classes["title__no-margin"]}
        >
          {title}
        </motion.h2>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
