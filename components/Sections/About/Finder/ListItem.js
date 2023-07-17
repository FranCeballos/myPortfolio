import { motion } from "framer-motion";
import classes from "./ListItem.module.css";

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

const ListItem = ({ isUdemy, title, certificateUrl }) => {
  return (
    <motion.li variants={itemVariant} className={classes["item"]}>
      <div className={classes["item__img-box"]}>
        <img
          className={classes["item__img"]}
          src={
            isUdemy
              ? "./assets/img/udemy_logo.webp"
              : "./assets/img/coderhouse_logo.webp"
          }
          alt={isUdemy ? "Udemy Logo" : "CoderHouse Logo"}
        />
      </div>
      <div className={classes["item__title-box"]}>
        <p className={classes["item__title"]}>{title}</p>
      </div>
      <div className={classes["item__icon-box"]}>
        <a href={certificateUrl} target="_blank">
          <img
            className={classes["item__icon"]}
            src="./assets/img/eye.svg"
            alt="Eye Icon"
          />
        </a>
      </div>
    </motion.li>
  );
};

export default ListItem;
