import Image from "next/image";
import classes from "./CareerStep.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const CareerStep = ({
  position,
  company,
  fromDate,
  toDate,
  image,
  companyUrl,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes["image__container"]}>
        <Image
          src={image}
          alt={`${company} logo`}
          width={100}
          height={100}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <h3 className={classes.position}>{position}</h3>
        {companyUrl ? (
          <Link href={companyUrl} className={classes.company} target="_blank">
            {company}
          </Link>
        ) : (
          <p className={classes.company}>{company}</p>
        )}
        <div className={classes["date__container"]}>
          <FaCalendarAlt />
          <p>{fromDate}</p>-<p>{toDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerStep;
