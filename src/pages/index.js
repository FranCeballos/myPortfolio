import { motion } from "framer-motion";
import { fetchData } from "../lib/fetchData";

import HeadComponent from "@/src/components/Head/Head";
import Hero from "@/src/components/Sections/Hero";
import SectionLayout from "@/src/components/Sections/SectionLayout";
import About from "@/src/components/Sections/About/About";
import MyTools from "@/src/components/Sections/MyTools/MyTools";
import MyProjects from "@/src/components/Sections/MyProjects/MyProjects";
import Footer from "@/src/components/Footer/Footer";
import EnvelopeIcon from "@/src/components/UI/Icons/EnvelopeIcon";
import ScaleOnHover from "../components/UI/AnimatedComponents/ScaleOnHover";
import Header from "../components/Header/Header";
import MyCareer from "../components/Sections/MyCareer/MyCareer";

const Home = ({ data }) => {
  const {
    educationData,
    certificatesData,
    socialsData,
    logos,
    logos2,
    projectsData,
    myCareer,
  } = data;

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
        <ScaleOnHover>
          <EnvelopeIcon />
        </ScaleOnHover>
      </motion.a>
      <Header />
      <Hero />
      <SectionLayout id="aboutme" title="./AboutMe" horizontalPadding={true}>
        <About aboutData={{ educationData, certificatesData, socialsData }} />
      </SectionLayout>
      <SectionLayout id="mytools" title="./MyTools" horizontalPadding={false}>
        <MyTools toolsData={{ logos, logos2 }} />
      </SectionLayout>
      <SectionLayout id="mycareer" title="./MyCareer" darker={true}>
        <MyCareer career={myCareer} />
      </SectionLayout>
      <SectionLayout
        id="myprojects"
        title="./MyProjects"
        darker={true}
        noDiagonal
      >
        <MyProjects projects={projectsData} />
      </SectionLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const [data] = await fetchData();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};

export default Home;
