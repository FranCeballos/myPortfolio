import { motion } from "framer-motion";
import classes from "./MyTools.module.css";

const logos = [
  { altText: "HTML logo", imageUrl: "./assets/img/tools/html.png" },
  { altText: "CSS logo", imageUrl: "./assets/img/tools/css.png" },
  { altText: "JavaScript logo", imageUrl: "./assets/img/tools/javascript.png" },
  { altText: "React logo", imageUrl: "./assets/img/tools/react.png" },
  { altText: "Next logo", imageUrl: "./assets/img/tools/nextjs.png" },
  { altText: "Framer logo", imageUrl: "./assets/img/tools/framer.png" },
  { altText: "Redux logo", imageUrl: "./assets/img/tools/redux.png" },
  { altText: "Sass logo", imageUrl: "./assets/img/tools/sass.png" },
];

const logos2 = [
  { altText: "Node logo", imageUrl: "./assets/img/tools/nodejs.png" },
  { altText: "Express logo", imageUrl: "./assets/img/tools/express.png" },
  { altText: "MongoDb logo", imageUrl: "./assets/img/tools/mongodb.png" },
  { altText: "Firebase logo", imageUrl: "./assets/img/tools/firebase.png" },
  { altText: "Git logo", imageUrl: "./assets/img/tools/git.png" },
  { altText: "Npm logo", imageUrl: "./assets/img/tools/npm.png" },
  { altText: "GitHub logo", imageUrl: "./assets/img/tools/github.png" },
  {
    altText: "Visual Studio Code logo",
    imageUrl: "./assets/img/tools/vsc.png",
  },
];

const MyTools = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
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
              <img
                className={classes["tools__image"]}
                src={logoInfo.imageUrl}
                alt={logoInfo.altText}
              />
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
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
              <img
                className={classes["tools__image"]}
                src={logoInfo.imageUrl}
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
