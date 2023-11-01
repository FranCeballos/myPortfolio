import classes from "./FinderControlIcons.module.css";

const FinderControlIcons = () => {
  return (
    <div
      className={`${classes["nav__window-icons"]} ${classes["finder__window-icons"]}`}
    >
      <div className={`${classes["nav__icon"]} ${classes["close-icon"]}`}></div>
      <div
        className={`${classes["nav__icon"]} ${classes["minimize-icon"]}`}
      ></div>
      <div
        className={`${classes["nav__icon"]} ${classes["maximize-icon"]}`}
      ></div>
    </div>
  );
};

export default FinderControlIcons;
