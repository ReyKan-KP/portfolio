import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
} from "../assets";

export const myGithub = "https://github.com/ReyKan-KP";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
  {
    title: "Coder",
    icon: web,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://iili.io/J5RxpFj.png",
  },
  {
    name: "CSS 3",
    icon: "https://iili.io/J5RzIAN.png",
  },
  {
    name: "JavaScript",
    icon: "https://iili.io/J5HwCv9.png",
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: "https://iili.io/J5RI3J4.png",
  },
  {
    name: "Redux",
    icon: "https://iili.io/J5HViKP.png",
  },
  {
    name: "Node JS",
    icon: "https://iili.io/J5RInse.png",
  },
  {
    name: "Three JS",
    icon: "https://iili.io/J5HWPIf.png",
  },
  {
    name: "Express JS",
    icon: "https://iili.io/J5RI5mB.png",
  },
  {
    name: "EJS",
    icon: "https://iili.io/J5HWAJe.png",
  },
  {
    name: "flask",
    icon: "https://iili.io/J5HMcpj.png",
  },
  {
    name: "Django",
    icon: "https://iili.io/J5HWI07.png",
  },
  {
    name: "MongoDB",
    icon: "https://iili.io/J5HjrkF.png",
  },
  {
    name: "MySQL",
    icon: "https://iili.io/J5HWVdF.png",
  },
  {
    name: "git",
    icon: "https://iili.io/J5RIWep.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://iili.io/J5RIvrG.png",
  },
  {
    name: "Bootstrap",
    icon: "https://iili.io/J5HWqbf.png",
  },
  {
    name: "Java",
    icon: "https://iili.io/J5HMDn2.png",
  },
  {
    name: "C",
    icon: "https://iili.io/J5HVocF.png",
  },
  {
    name: "C++",
    icon: "https://iili.io/J5HVnF1.png",
  },
  {
    name: "Python",
    icon: "https://iili.io/J5HWJfI.png",
  },
  {
    name: "MATLAB",
    icon: "https://iili.io/J5HW2UX.png",
  },
];

const experiences = [
  {
    title: "Google Cloud Skills Boost",
    company_name: "Google Cloud",
    icon: "https://iili.io/J5HCevs.webp",
    iconBg: "#090a0f",
    date: "October 2023 - November 2023",
    points: [
      "Participated and achieved the Google Cloud Skills Boost program, earning certifications in Cloud Computing Fundamentals, Infrastructure, Prompt Engineering, Networking & Security, Data, ML, and AI in Google Cloud, as well as practical skills like resource management and network building. This journey has honed my abilities in cloud technologies, showcasing my commitment to staying ahead in the fast-paced corporate tech landscape. These certifications validate my hands-on expertise, reflecting my dedication to continuous learning and proficiency in Google Cloud.",
    ],
  },
  {
    title: "Hacktoberfest 2023",
    company_name: "Hacktoberfest",
    icon: "https://iili.io/J5HurOX.png",
    iconBg: "#090a0f",
    date: "October 2023 - November 2023",
    points: [
      "Engaging in Hacktoberfest 2023, I actively contributed to the open-source community, demonstrating my passion for collaborative software development and commitment to fostering a culture of innovation. Throughout the event, I leveraged my skills in coding and problem-solving to contribute meaningfully to various projects, further honing my abilities in a collaborative and dynamic environment. This experience not only showcases my dedication to staying abreast of industry trends but also underscores my commitment to the principles of open source and community-driven development.",
    ],
  },
];

const projects = [
  {
    name: "GoodWill",
    description:
      "NGO Funding Website, This is a website designed to connect NGOs with potential donors and volunteers. The website serves as a platform for NGOs to showcase their causes and projects, while also allowing users to browse and donate to the causes they support.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux.js",
        color: "gradient-text3",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/J5HY3j1.png",
    source_code_link: "https://github.com/ReyKan-KP/GoodWill",
  },
  {
    name: "Recommendation System",
    description:
      "Flask-based Anime/Manga recommendation system utilizes an IR similarity algorithm to provide personalized suggestions based on user preferences, including descriptions, ratings, interactions, and viewing history. Built with Flask, it features document search, ranking, spell correction, and user feedback, offering Anime/Manga enthusiasts a comprehensive platform for seamless content discovery.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "gradient-text3",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "IR Similarity Algorithm",
        color: "green-text-gradient",
      },
    ],
    image: "https://iili.io/J5HcQjI.png",
    source_code_link:
      "https://github.com/ReyKan-KP/Anime-Manga-Recommendation-System-Using-IR",
  },
  {
    name: "CityDex",
    description:
      " CLI City Guide project crafted in Java. This command-line interface seamlessly integrates with a MySQL database, offering users a dynamic city exploration experience. Access comprehensive information on attractions, dining, and accommodations. Effortlessly navigate through cities, all while enjoying a responsive and user-friendly interface. Explore urban landscapes with ease using this Java-based city guide.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "gradient-text3",
      },
      {
        name: "MySQL Database",
        color: "green-text-gradient",
      },
    ],
    image: "https://iili.io/J5H1Np4.png",
    source_code_link: "https://github.com/ReyKan-KP/CityDex",
  },
  {
    name: "Pneumonia Chest-X-Ray Classification",
    description:
      "Three chest X-ray classification models: simple neural network, CNN, and CNN with residual connections. Features include model development, performance evaluation, dataset exploration, data augmentation, and early stopping. Compare strengths and weaknesses for improved pneumonia detection. ",
    tags: [
      {
        name: "Python",
        color: "gradient-text3",
      },
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
    ],
    image: "https://iili.io/J5HEJyv.png",
    source_code_link:
      "https://github.com/ReyKan-KP/Pneumonia_Chest-X-Ray_Classification",
  },
];

export { services, technologies, experiences, projects };
