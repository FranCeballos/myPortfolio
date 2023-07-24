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
import { useWindowSize } from "@/hooks/useWindowSize";
import { certificatesData, educationData, socialsData } from "@/db/myData";

const AboutFinder = ({ containerRef }) => {
  const [subfolderName, setSubfolderName] = useState("education");

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 425;
  const desktopOffset = ["0 0.9", "0.8 1"];
  const mobileOffset = ["0 0.9", "0.7 1"];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? mobileOffset : desktopOffset,
  });
  const xPositionFinder = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0])
  );

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
