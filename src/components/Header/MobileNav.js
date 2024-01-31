import React from "react";
import Link from "next/link";
import { navItems } from "@/src/lib/navData";
import { motion } from "framer-motion";
import classes from "./MobileNav.module.css";

const MobileNav = ({ closeNav }) => {
  return (
    <motion.nav
      className={classes.nav}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <ul className={classes["nav__list"]}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="link-styles-off"
            onClick={closeNav}
          >
            <motion.li
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className={classes["nav__item"]}
            >
              <p>{item.title}</p>
            </motion.li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileNav;
