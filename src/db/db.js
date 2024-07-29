import portfolioImage from "../assets/img/portfolio-site.png";
import trelloImage from "../assets/img/trello.png";
import netflixCloneImage from "../assets/img/netflix-clone.jpg";
import vueStagramImage from "../assets/img/vuestagram-image.jpg";
import floorboticsImage from "../assets/img/floorbotics-website.jpg";
import duplexCleaningImage from "../assets/img/duplex-cleaning-machines-site.jpg";
const db = [
  {
    title: "Duplex Cleaning Machines",
    site: "https://duplexcleaning.com.au/",
    description:
      "Rebuild B2B commercial floor cleaning machines site with a responsive design for various devices. SEO optimisation improves search engine ranking.",
    img: duplexCleaningImage,
    tag: ["Javascript", "HTML", "CSS", "PHP", "Wordpress"],
  },
  {
    title: "Floorbotics",
    site: "https://floorbotics.com.au/",
    description:
      "B2B commercial robot cleaning machines site with a responsive design for various devices. SEO optimisation improves search engine ranking.",
    img: floorboticsImage,
    tag: ["Javascript", "HTML", "CSS", "PHP", "Wordpress"],
  },
  {
    title: "Todo Site",
    site: "https://mickck.github.io/react-todolist-app",
    description:
      "To do list project with form validation, drag and drop, state management features built using ReactJS, Typescript, ReCoil, Styled Components, React Hook Form, React Queary and Beautiful DnD",
    img: trelloImage,
    tag: [
      "Reactjs",
      "Frame Motion",
      "Style-components",
      "Typescript",
      "Recoil",
    ],
    github: "https://github.com/mickck/react-todo-app",
  },
  {
    title: "Netflix Clone Site",
    site: null,
    description:
      "Netflix clone project with movie searching, slider and modal features built using TypeScript, Styled Components, React.js and Framer Motion",
    img: netflixCloneImage,
    tag: ["Reactjs", "Frame Motion", "Typescript", "Recoil"],
    github: "https://github.com/mickck/netflix-clone",
  },
  {
    title: "Instagram Clone",
    site: "https://vue-stragram.vercel.app/",
    description: "Instagram clone with the Vue framework and Vuex",
    img: vueStagramImage,
    tag: ["Vuejs", "SCSS", "Vuex"],
    github: "https://github.com/mickck/vue-stragram",
  },
];

export default db;
