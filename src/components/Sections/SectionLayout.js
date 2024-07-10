import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import classes from "./SectionLayout.module.css";
import ScaleInView from "../UI/AnimatedComponents/ScaleInView";

const SectionLayout = ({
  title,
  children,
  horizontalPadding = true,
  titleMargin = true,
  darker = false,
  id,
  noDiagonal = false,
}) => {
  const sectionRef = useRef();

  return (
    <motion.section
      id={id}
      className={`${
        horizontalPadding ? classes.container : classes["container__no-padding"]
      } ${
        darker
          ? noDiagonal
            ? classes["darker__no-diagonal"]
            : classes.darker
          : ""
      }`}
    >
      <ScaleInView ref={sectionRef}>
        <motion.div className={classes["title-container"]} ref={sectionRef}>
          <motion.h2
            className={
              titleMargin ? classes.title : classes["title__no-margin"]
            }
          >
            {title}
          </motion.h2>
        </motion.div>
      </ScaleInView>
      {children}
    </motion.section>
  );
};

export default SectionLayout;
