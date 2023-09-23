import { motion } from "framer-motion";
import { logos, logos2 } from "@/db/myData";
import classes from "./MyTools.module.css";
import Image from "next/image";

const MyTools = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-50%", y: 150 }}
        animate={{ x: 0, y: 150 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className={classes["tools__list"]}
      >
        {logos.concat(logos).map((logoInfo) => {
          return (
            <div key={Math.random()} className={classes["tools__item"]}>
              <Image
                className={classes["tools__image"]}
                src={logoInfo.imageUrl}
                width={200}
                height={200}
                alt={logoInfo.altText}
              />
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 225 }}
        animate={{ x: "-50%", y: 225 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className={classes["tools__list"]}
      >
        {logos2.concat(logos2).map((logoInfo) => {
          return (
            <div key={Math.random()} className={classes["tools__item"]}>
              <Image
                className={classes["tools__image"]}
                src={logoInfo.imageUrl}
                width={200}
                height={200}
                alt={logoInfo.altText}
              />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default MyTools;
