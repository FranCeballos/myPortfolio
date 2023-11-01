import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import classes from "./AboutFinder.module.css";
import List from "./List";
import FinderControlIcons from "./FinderControlIcons";
import { certificatesData, educationData, socialsData } from "@/src/db/myData";
import AboutMe from "./AboutMe";

const AboutFinder = ({ containerRef }) => {
  const [subfolderName, setSubfolderName] = useState("aboutme");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.6 0.8"],
  });
  const xPositionFinder = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0]),
    { stiffness: 450, bounce: 0.1, damping: 90 }
  );

  const showAboutMeHandler = () => setSubfolderName("aboutme");
  const showCertificatesHandler = () => setSubfolderName("certificates");
  const showEducationHandler = () => setSubfolderName("education");
  const showSocialsHandler = () => setSubfolderName("socials");

  return (
    <motion.div
      style={{
        scale: scrollYProgress,
        translateX: xPositionFinder,
      }}
      className={classes["finder"]}
    >
      <FinderControlIcons />
      <div className={classes["finder__sidebar"]}>
        <button
          onClick={showAboutMeHandler}
          id="education-btn"
          className={`${classes["finder__btn"]} ${
            subfolderName === "aboutme" ? classes["active"] : ""
          }`}
        >
          AboutMe
        </button>
        <button
          onClick={showEducationHandler}
          id="education-btn"
          className={`${classes["finder__btn"]} ${
            subfolderName === "education" ? classes["active"] : ""
          }`}
        >
          Education
        </button>
        <button
          onClick={showCertificatesHandler}
          id="certificates-btn"
          className={`${classes["finder__btn"]} ${
            subfolderName === "certificates" ? classes["active"] : ""
          }`}
        >
          Certificates
        </button>
        <button
          onClick={showSocialsHandler}
          id="certificates-btn"
          className={`${classes["finder__btn"]} ${
            subfolderName === "socials" ? classes["active"] : ""
          }`}
        >
          Socials
        </button>
      </div>
      <div className={classes["finder__title-box"]}>
        <h3 className={classes["finder__title"]}>
          Francisco Ceballos/{subfolderName}
        </h3>
      </div>
      <div className={classes["finder__content"]}>
        <AnimatePresence initial={false} mode="wait">
          {subfolderName === "aboutme" && <AboutMe key="about" />}
          {subfolderName === "certificates" && (
            <List key="certificates" data={certificatesData} />
          )}
          {subfolderName === "education" && (
            <List key="education" data={educationData} />
          )}
          {subfolderName === "socials" && (
            <List key="socials" data={socialsData} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AboutFinder;
