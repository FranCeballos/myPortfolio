import { motion } from "framer-motion";
import Image from "next/image";
import classes from "./Project.module.css";

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

const Project = ({ data }) => {
  return (
    <motion.div
      variants={itemVariant}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 1, type: "spring" }}
      className="link-styles-off"
    >
      <div className={classes.container}>
        <div className={classes["image-box"]}>
          <Image
            className={classes.image}
            src={data.imageUrl}
            width={1280}
            height={688}
            alt={data.title}
          />
          <div className={classes["links-container"]}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, type: "spring" }}
              href={data.deployUrl}
              target="_blank"
              className={classes["links-deploy"]}
            >
              DEPLOY
            </motion.a>
            {data.githubUrl && (
              <motion.a
                href={data.githubUrl}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Image
                  className={classes["link-github"]}
                  width={300}
                  height={300}
                  src="/assets/img/tools/github.png"
                  alt={data.title}
                />
              </motion.a>
            )}
          </div>
        </div>
        <div className={classes["content"]}>
          <h3 className={classes["title"]}>{data.title}</h3>
          <p className={classes["description"]}>{data.description}</p>
        </div>
        <div className={classes["tech-container"]}>
          {data.tecnology.map((tech) => (
            <div
              key={Math.random()}
              className={`${classes["tech-text-container"]} ${classes["blue"]}`}
            >
              <p className={classes["tech-text"]}>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
