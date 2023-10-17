export const educationData = [
  {
    educationImage: true,
    isUdemy: false,
    title: "CoderHouse",
    hasLink: false,
  },
  {
    educationImage: true,
    isUdemy: true,
    title: "Udemy",
    hasLink: false,
  },
];

export const certificatesData = [
  {
    educationImage: true,
    isUdemy: false,
    title: "HTML & CSS",
    hasLink: true,
    externalLink:
      "https://www.coderhouse.com/certificados/629fb5e3993cad002421dd1a",
  },
  {
    educationImage: true,
    isUdemy: false,
    title: "JavaScript",
    hasLink: true,
    externalLink:
      "https://www.coderhouse.com/certificados/62f68e27628efb0024957ecf",
  },
  {
    educationImage: true,
    isUdemy: false,
    title: "React",
    hasLink: true,
    externalLink:
      "https://www.coderhouse.com/certificados/6340085161b9e7000e8d224f",
  },
  {
    educationImage: true,
    isUdemy: false,
    title: "NodeJs / Express",
    hasLink: true,
    externalLink:
      "https://www.coderhouse.com/certificados/645fdc308da67e0002bc6605",
  },
  {
    educationImage: true,
    isUdemy: true,
    title: "Advanced JavaScript",
    hasLink: true,
    externalLink:
      "https://www.udemy.com/certificate/UC-58710334-da1b-488d-a0c4-8ea273a39428/",
  },
  {
    educationImage: true,
    isUdemy: true,
    title: "Advanced React",
    hasLink: true,
    externalLink:
      "https://www.udemy.com/certificate/UC-c762f944-1f33-44f1-9a9a-e8d8a37244f3/",
  },
  {
    educationImage: true,
    isUdemy: true,
    title: "Next.js",
    hasLink: true,
    externalLink:
      "https://www.udemy.com/certificate/UC-648220d2-5438-4515-bc25-caded92fb331/",
  },
  {
    educationImage: true,
    isUdemy: true,
    title: "Advanced NodeJs / Express",
    hasLink: true,
    externalLink:
      "https://www.udemy.com/certificate/UC-c762f944-1f33-44f1-9a9a-e8d8a37244f3/",
  },
];

export const socialsData = [
  {
    educationImage: false,
    customImageUrl: "/assets/img/linkedin.png",
    title: "LinkedIn",
    hasLink: true,
    externalLink: "https://www.linkedin.com/in/francisco-ceballos-dev",
  },
  {
    educationImage: false,
    customImageUrl: "/assets/img/tools/github.png",
    title: "GitHub",
    hasLink: true,
    externalLink: "https://github.com/FranCeballos",
  },
];

export const logos = [
  { altText: "HTML logo", imageUrl: "/assets/img/tools/html.png" },
  { altText: "CSS logo", imageUrl: "/assets/img/tools/css.png" },
  { altText: "JavaScript logo", imageUrl: "/assets/img/tools/javascript.png" },
  { altText: "React logo", imageUrl: "/assets/img/tools/react.png" },
  { altText: "Next logo", imageUrl: "/assets/img/tools/nextjs.png" },
  { altText: "Framer logo", imageUrl: "/assets/img/tools/framer.png" },
  { altText: "Redux logo", imageUrl: "/assets/img/tools/redux.png" },
  { altText: "Sass logo", imageUrl: "/assets/img/tools/sass.png" },
];

export const logos2 = [
  { altText: "Node logo", imageUrl: "/assets/img/tools/nodejs.png" },
  { altText: "Express logo", imageUrl: "/assets/img/tools/express.png" },
  { altText: "MongoDb logo", imageUrl: "/assets/img/tools/mongodb.png" },
  { altText: "Firebase logo", imageUrl: "/assets/img/tools/firebase.png" },
  { altText: "Git logo", imageUrl: "/assets/img/tools/git.png" },
  { altText: "Npm logo", imageUrl: "/assets/img/tools/npm.png" },
  { altText: "GitHub logo", imageUrl: "/assets/img/tools/github.png" },
  {
    altText: "Visual Studio Code logo",
    imageUrl: "/assets/img/tools/vsc.png",
  },
];

export const projectsData = [
  {
    title: "Santiago Lucero Coach",
    description:
      "The official landing page of Santiago Lucero, a professional personal fitness trainer. A new high standard in my front-end design and programming skills.",
    tecnology: ["Next.js", "Framer Motion"],
    imageUrl: "/assets/img/projects/santiagolucerocoach.webp",
    date: "September 2023",
    device: "Desktop",
    isPractice: false,
    githubUrl: "https://github.com/FranCeballos/santiago-lucero-coach.git",
    deployUrl: "https://santiagolucerocoach.com",
  },
  {
    title: "Virtual Wallet Simulator",
    description:
      "A React virtual wallet where you can simulate sending and receiving money from other users. It is connected to a Node RESTful API.",
    tecnology: ["React", "Node.js", "MongoDB"],
    imageUrl: "/assets/img/projects/watermelon.webp",
    date: "July 2022",
    device: "Desktop",
    isPractice: true,
    githubUrl:
      "https://github.com/FranCeballos/Watermelon_wallet-simulator.git",
    deployUrl: "https://watermelon-wallet.vercel.app/",
  },
  {
    title: "Infinity Entertaiment App",
    description:
      " A Server-Side-Rendered e-commerce with login, live chat and cart management. The final project for Node CoderHouse course.",
    tecnology: ["Node.js", "Express", "MongoDB"],
    imageUrl: "/assets/img/projects/infinity.webp",
    date: "April 2023",
    device: "Desktop",
    isPractice: true,
    githubUrl: "https://github.com/FranCeballos/InfinityApp-BackEnd.git",
    deployUrl: "https://infinity-entertainment-app-qoo1-dev.fl0.io/shop",
  },
  {
    title: "Real Madrid Store Clone",
    description:
      "An React e-commerce where you can simulate buying Real Madrid merch. The final project for React CoderHouse course.",
    tecnology: ["React", "Firebase"],
    imageUrl: "/assets/img/projects/realmadrid.webp",
    date: "September 2022",
    device: "Desktop / Mobile",
    isPractice: true,
    githubUrl: "https://github.com/FranCeballos/realMadridStoreClone.git",
    deployUrl: "https://real-madrid-store-clone-ceballos.vercel.app/",
  },
  {
    title: "PlayStation Website Clone",
    description:
      "A static PlayStation clone website where flexbox, grids and basics animations where used. The final project for HTML & CSS CoderHouse course.",
    tecnology: ["HTML", "CSS", "SASS"],
    imageUrl: "/assets/img/projects/playstation.webp",
    date: "May 2022",
    device: "Desktop / Mobile",
    isPractice: true,
    githubUrl: "https://github.com/FranCeballos/static-playstation-web.git",
    deployUrl: "http://proyectofinal-sony.vercel.app/",
  },
];
