import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <nav className={classes["nav"]}>
        <a href="#main">
          <p className={classes["nav__title"]}>Dev Francisco Ceballos</p>
        </a>
      </nav>
    </header>
  );
};

export default Header;
