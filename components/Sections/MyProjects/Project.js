import { motion } from "framer-motion";
import Link from "next/link";
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
    <motion.a
      variants={itemVariant}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 1, type: "spring" }}
      className="link-styles-off"
      href={data.deployUrl}
      target="_blank"
    >
      <div className={classes.container}>
        <div className={classes["image-box"]}>
          <Image
            className={classes.image}
            src={data.imageUrl}
            width={1280}
            height={688}
          />
          <div className={classes["links-container"]}>
            <motion.p
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, type: "spring" }}
              className={classes["links-deploy"]}
            >
              DEPLOY
            </motion.p>
            {data.githubUrl && (
              <Link
                href={data.githubUrl}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <img
                  className={classes["link-github"]}
                  src="/assets/img/tools/github.png"
                />
              </Link>
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
              key={tech}
              className={`${classes["tech-text-container"]} ${classes["blue"]}`}
            >
              <p className={classes["tech-text"]}>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default Project;
