import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import useDimension from "@/src/hooks/use-dimension";

import LargeNav from "./LargeNav";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";

const buttonVariant = {
  hidde: {
    opacity: 0,
  },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const Header = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const { width } = useDimension();

  const openMobileNav = () => {
    setMobileNavIsOpen(true);
  };
  const closeMobileNav = () => {
    setMobileNavIsOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.header className={classes.header}>
          {width > 425 ? (
            <LargeNav />
          ) : mobileNavIsOpen ? (
            <motion.div
              key="close"
              variants={buttonVariant}
              initial="hidde"
              animate="show"
              exit="exit"
              transition={{
                type: "spring",
                duration: 0.001,
                stiffness: 450,
                bounce: 0.1,
                damping: 90,
              }}
            >
              <RxCross2 size={26} onClick={closeMobileNav} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              variants={buttonVariant}
              initial="hidde"
              animate="show"
              exit="exit"
              transition={{
                type: "spring",
                duration: 0.001,
                stiffness: 450,
                bounce: 0.1,
                damping: 90,
              }}
            >
              <RxHamburgerMenu size={23} onClick={openMobileNav} />
            </motion.div>
          )}
        </motion.header>
        {mobileNavIsOpen && (
          <MobileNav key="mobileNav" closeNav={closeMobileNav} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
