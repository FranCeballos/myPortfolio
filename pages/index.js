import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadComponent from "@/components/Head/Head";
import Hero from "@/components/Sections/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Dev. Francisco Ceballos"
        description="Full-Stack Web Developer"
      />
      <Hero />
    </>
  );
}
