import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { projectsData } from "@/src/db/myData";

import HeadComponent from "@/src/components/Head/Head";
import Hero from "@/src/components/Sections/Hero";
import SectionLayout from "@/src/components/Sections/SectionLayout";
import About from "@/src/components/Sections/About/About";
import MyTools from "@/src/components/Sections/MyTools/MyTools";
import MyProjects from "@/src/components/Sections/MyProjects/MyProjects";
import Footer from "@/src/components/Footer/Footer";
import EnvelopeIcon from "@/src/components/UI/Icons/EnvelopeIcon";

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
