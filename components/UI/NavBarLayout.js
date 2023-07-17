import Header from "../Header/Header";

const NavBarLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default NavBarLayout;
