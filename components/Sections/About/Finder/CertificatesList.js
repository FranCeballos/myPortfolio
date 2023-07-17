import { motion } from "framer-motion";
import ListItem from "./ListItem";
import classes from "./List.module.css";

const certificatesData = [
  {
    isUdemy: false,
    title: "HTML & CSS",
    certificateUrl:
      "https://www.coderhouse.com/pages/certificados/629fb5e3993cad002421dd1a",
  },
  {
    isUdemy: false,
    title: "JavaScript",
    certificateUrl:
      "https://www.coderhouse.com/pages/certificados/62f68e27628efb0024957ecf",
  },
  {
    isUdemy: false,
    title: "React",
    certificateUrl:
      "https://www.coderhouse.com/pages/certificados/6340085161b9e7000e8d224f",
  },
  {
    isUdemy: false,
    title: "NodeJs / Express",
    certificateUrl:
      "https://www.coderhouse.com/pages/certificados/645fdc308da67e0002bc6605",
  },
  {
    isUdemy: true,
    title: "Advanced JavaScript",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-58710334-da1b-488d-a0c4-8ea273a39428/",
  },
  {
    isUdemy: true,
    title: "Advanced React",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-c762f944-1f33-44f1-9a9a-e8d8a37244f3/",
  },
  {
    isUdemy: true,
    title: "Advanced NodeJs / Express",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-c762f944-1f33-44f1-9a9a-e8d8a37244f3/",
  },
];

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

const CertificatesList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      exit="exit"
      variants={containerVariant}
      className={classes["item__list"]}
    >
      {certificatesData.map((cert) => (
        <ListItem
          key={cert.certificateUrl}
          isUdemy={cert.isUdemy}
          title={cert.title}
          certificateUrl={cert.certificateUrl}
        />
      ))}
    </motion.ul>
  );
};

export default CertificatesList;
