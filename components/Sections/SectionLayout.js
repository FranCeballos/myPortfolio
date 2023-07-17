import { motion, useScroll, useSpring } from "framer-motion";
import classes from "./SectionLayout.module.css";

const SectionLayout = ({ title, children }) => {
  const { scrollYProgress } = useScroll({ offset: [0, 0.5] });
  const titleScale = useSpring(scrollYProgress);

  return (
    <section className={classes.container}>
      <motion.h2 style={{ scale: titleScale }} className={classes.title}>
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default SectionLayout;
