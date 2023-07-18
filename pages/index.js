import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadComponent from "@/components/Head/Head";
import Hero from "@/components/Sections/Hero";
import SectionLayout from "@/components/Sections/SectionLayout";
import About from "@/components/Sections/About/About";
import MyTools from "@/components/Sections/MyTools/MyTools";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Dev. Francisco Ceballos"
        description="Full-Stack Web Developer"
      />
      <Hero />
      <SectionLayout title="./AboutMe" horizontalPadding={true}>
        <About />
      </SectionLayout>
      <SectionLayout title="./MyTools" horizontalPadding={false}>
        <MyTools />
      </SectionLayout>
    </>
  );
}
