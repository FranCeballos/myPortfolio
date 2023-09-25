import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeadComponent from "@/components/Head/Head";
import Hero from "@/components/Sections/Hero";
import SectionLayout from "@/components/Sections/SectionLayout";
import About from "@/components/Sections/About/About";
import MyTools from "@/components/Sections/MyTools/MyTools";
import MyProjects from "@/components/Sections/MyProjects/MyProjects";
import { projectsData } from "@/db/myData";
import Footer from "@/components/Footer/Footer";
import EnvelopeIcon from "@/components/UI/Icons/EnvelopeIcon";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ projects }) => {
  return (
    <>
      <HeadComponent
        title="Dev. Francisco Ceballos"
        description="Front End Web Developer"
      />
      <motion.a
        initial={{ x: "50vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 3, type: "spring" }}
        href="mailto:franciscoceballos.dev@gmail.com"
        className="link__fixed"
      >
        <EnvelopeIcon />
      </motion.a>
      <Hero />
      <SectionLayout title="./AboutMe" horizontalPadding={true}>
        <About />
      </SectionLayout>
      <SectionLayout title="./MyTools" horizontalPadding={false}>
        <MyTools />
      </SectionLayout>
      <SectionLayout title="./MyProjects" darker={true}>
        <MyProjects projects={projects} />
      </SectionLayout>
      <Footer />
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
