import React from "react";
import classes from "./StepsLine.module.css";
import Step from "./Step";

const StepsLine = ({ steps, sup, numbers = true }) => {
  return (
    <div className={classes.container}>
      {steps.map((step, index) => (
        <Step key={index} num={index + 1} sup={sup[index]} numbers={numbers}>
          {step}
        </Step>
      ))}
    </div>
  );
};

export default StepsLine;
