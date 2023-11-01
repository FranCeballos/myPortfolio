import { motion } from "framer-motion";
import classes from "./ListItem.module.css";
import Image from "next/image";

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
    transition: {
      duration: 0.05,
    },
  },
};

const ListItem = ({
  educationImage,
  isUdemy,
  customImageUrl,
  title,
  hasLink,
  externalLink,
}) => {
  return (
    <motion.li variants={itemVariant} className={classes["item"]}>
      <div className={classes["item__img-box"]}>
        <Image
          className={classes["item__img"]}
          height={200}
          width={200}
          priority={true}
          src={
            educationImage
              ? isUdemy
                ? "/assets/img/udemy_logo.webp"
                : "/assets/img/coderhouse_logo.webp"
              : customImageUrl
          }
          alt={
            educationImage
              ? isUdemy
                ? "Udemy Logo"
                : "CoderHouse Logo"
              : title
          }
        />
      </div>
      <div className={classes["item__title-box"]}>
        <p className={classes["item__title"]}>{title}</p>
      </div>
      {hasLink && (
        <div className={classes["item__icon-box"]}>
          <a href={externalLink} target="_blank">
            <img
              className={classes["item__icon"]}
              src="./assets/img/eye.svg"
              alt="Eye Icon"
            />
          </a>
        </div>
      )}
    </motion.li>
  );
};

export default ListItem;
