import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadComponent from "@/components/Head/Head";
import Hero from "@/components/Sections/Hero";
import SectionLayout from "@/components/Sections/SectionLayout";
import About from "@/components/Sections/About/About";
import MyTools from "@/components/Sections/MyTools/MyTools";
import MyProjects from "@/components/Sections/MyProjects/MyProjects";
import { projectsData } from "@/db/myData";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ projects }) => {
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
      <SectionLayout title="./MyProjects">
        <MyProjects projects={projects} />
      </SectionLayout>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};

export default Home;
