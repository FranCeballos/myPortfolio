import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/src/lib/navData";
import classes from "./LargeNav.module.css";

const LargeNav = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav__list"]}>
        {navItems.map((item) => (
          <motion.li
            key={item.href}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring" }}
            className={classes["nav__item"]}
          >
            <Link href={item.href} className="link-styles-off">
              {item.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default LargeNav;
