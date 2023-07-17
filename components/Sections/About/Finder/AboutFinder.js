import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import classes from "./AboutFinder.module.css";
import CertificatesList from "./CertificatesList";
import EducationList from "./EducationList";
import FinderControlIcons from "./FinderControlIcons";
import { useWindowSize } from "@/hooks/useWindowSize";

const AboutFinder = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [subfolderName, setSubfolderName] = useState("education");

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 425;
  const desktopOffset = [0.3, 0.8];
  const mobileOffset = [0.05, 0.4];

  const { scrollYProgress } = useScroll({
    offset: isMobile ? mobileOffset : desktopOffset,
  });
  const xPositionFinder = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0])
  );

  const showCertificatesHandler = () => {
    setSubfolderName("certificates");
    setShowCertificates(true);
  };
  const showEducationHandler = () => {
    setSubfolderName("education");
    setShowCertificates(false);
  };

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
      </div>
      <div className={classes["finder__title-box"]}>
        <h3 className={classes["finder__title"]}>
          Francisco Ceballos/{subfolderName}
        </h3>
      </div>
      <div className={classes["finder__content"]}>
        <AnimatePresence initial={false} mode="wait">
          {showCertificates && <CertificatesList />}
          {!showCertificates && <EducationList />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AboutFinder;
