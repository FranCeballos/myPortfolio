import { motion } from "framer-motion";
import ListItem from "./ListItem";
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
  exit: {
    transition: {
      duration: 0.05,
    },
  },
};

const List = ({ data }) => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      exit="exit"
      variants={containerVariant}
      className={classes["item__list"]}
    >
      {data.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          educationImage={item.educationImage}
          isUdemy={item.isUdemy}
          customImageUrl={item.customImageUrl}
          hasLink={item.hasLink}
          externalLink={item.externalLink}
        />
      ))}
    </motion.ul>
  );
};

export default List;
