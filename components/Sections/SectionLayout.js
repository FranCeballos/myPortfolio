import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import classes from "./SectionLayout.module.css";

const SectionLayout = ({
  title,
  children,
  horizontalPadding = true,
  titleMargin = true,
  darker = false,
}) => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 0.9", "1 1"],
  });
  const titleScale = useSpring(scrollYProgress);

  return (
    <section
      className={`${
        horizontalPadding ? classes.container : classes["container__no-padding"]
      } ${darker ? classes.darker : ""}`}
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
