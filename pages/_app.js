import NavBarLayout from "@/components/UI/NavBarLayout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  );
}
