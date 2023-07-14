import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <p className={classes["nav__title"]}>Dev Francisco Ceballos</p>
      </nav>
    </header>
  );
};

export default Header;
