import Header from "../Header/Header";

const NavBarLayout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default NavBarLayout;
