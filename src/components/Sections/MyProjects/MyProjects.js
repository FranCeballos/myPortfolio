import { motion } from "framer-motion";

import Project from "./Project";

import classes from "./MyProjects.module.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      duration: 0.05,
    },
  },
};

const MyProjects = ({ projects }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      exit="exit"
      className={classes.container}
    >
      {projects.map((proj) => (
        <Project key={proj.imageUrl} data={proj} />
      ))}
    </motion.div>
  );
};

export default MyProjects;
