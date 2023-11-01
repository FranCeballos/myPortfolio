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
}) => {
  const sectionRef = useRef();

  return (
    <section
      className={`${
        horizontalPadding ? classes.container : classes["container__no-padding"]
      } ${darker ? classes.darker : ""}`}
    >
      <div className={classes["title-container"]} ref={sectionRef}>
        <ScaleInView ref={sectionRef}>
          <motion.h2
            className={
              titleMargin ? classes.title : classes["title__no-margin"]
            }
          >
            {title}
          </motion.h2>
        </ScaleInView>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
