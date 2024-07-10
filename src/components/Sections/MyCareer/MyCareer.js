import classes from "./MyCareer.module.css";
import StepsLine from "../../UI/Information/StepsLine/StepsLine";
import CareerStep from "./CareerStep";
import SlideOnScroll from "../../UI/AnimatedComponents/SlideOnScroll";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import useDimension from "@/src/hooks/use-dimension";

const MyCareer = ({ career }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0.9", "0.2 0.9"],
  });

  const { width } = useDimension();
  const springOptions = { stiffness: 450, bounce: 0.1, damping: 90 };
  return (
    <div ref={containerRef} className={classes.container}>
      <SlideOnScroll
        scrollYProgress={scrollYProgress}
        screenWidth={width}
        springOptions={springOptions}
      >
        <p className={classes.subtitle}>Latest</p>
      </SlideOnScroll>
      <StepsLine
        numbers={false}
        steps={career
          .sort((a, b) => a.order - b.order)
          .map(
            ({
              position,
              company,
              fromDate,
              toDate,
              isCurrent,
              image,
              companyUrl,
            }) => (
              <CareerStep
                position={position}
                company={company}
                fromDate={fromDate}
                toDate={toDate}
                isCurrent={isCurrent}
                image={image}
                companyUrl={companyUrl}
              />
            )
          )}
        sup={["", "", "", "4"]}
      />
    </div>
  );
};

export default MyCareer;
