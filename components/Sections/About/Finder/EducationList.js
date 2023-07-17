import { motion } from "framer-motion";
import classes from "./List.module.css";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {},
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

const EducationList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      exit="exit"
      variants={containerVariant}
      className={classes["item__list"]}
    >
      <motion.li variants={itemVariant} className={classes["item"]}>
        <div className={classes["item__img-box"]}>
          <img
            className={classes["item__img"]}
            src="./assets/img/coderhouse_logo.webp"
            alt="CoderHouse Logo"
          />
        </div>
        <div className={classes["item__title-box"]}>
          <p className={classes["item__title"]}>CoderHouse</p>
        </div>
      </motion.li>
      <motion.li variants={itemVariant} className={classes["item"]}>
        <div className={classes["item__img-box"]}>
          <img
            className={classes["item__img"]}
            src="./assets/img/udemy_logo.webp"
            alt="Udemy Logo"
          />
        </div>
        <div className={classes["item__title-box"]}>
          <p className={classes["item__title"]}>Udemy</p>
        </div>
      </motion.li>
    </motion.ul>
  );
};

export default EducationList;
