import Image from "next/image";
import { motion } from "framer-motion";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.leftContainer}></p>
      <p className={classes.centerContainer}>Made to Love and Create</p>
      <div className={classes.rightContainer}>
        <motion.a
          href="https://www.linkedin.com/in/francisco-ceballos-dev"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Image
            className={classes.linkedInImage}
            src="/assets/img/linkedin.png"
            width={300}
            height={300}
          />
        </motion.a>
        <motion.a
          href="https://github.com/FranCeballos"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Image
            className={classes.linkedInImage}
            src="/assets/img/tools/github.png"
            width={300}
            height={300}
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
