import train_img from "../img/train-ticket-project.png";
import font_ratio_img from "../img/font-ratio-project.jpg";
import mine_field_img from "../img/mine-field-project.png";
import portfolio from "../img/portfolio.png";
import metgram from "../img/metgram.png";

const projects = [
  {
    key: "metgram-project",
    title: "Metgram",
    img: metgram,
    subtitle: "Personal project.",
    text: "The Metgram app allows a user to view pieces from the Metropolitan Museum of Art from all around the world. The app is built by using React and Material UI for React and is powered by the 'Metropolitan Museum of Art' public API. The app is fully responsive, works on any device and is designed by me.",
    liveLink: "https://sargon17.github.io/metgram/",
    githubLink: "https://github.com/sargon17/metgram",
    tech: [
      {
        name: "React",
        style: "purple",
      },
      {
        name: "Material UI",
        style: "blue",
      },
      {
        name: "SASS",
        style: "pink",
      },
      {
        name: "Figma",
        style: "blue",
      },
      {
        name: "HTML5",
        style: "orange",
      },
    ],
  },
  {
    key: "font-ratio-project",
    title: "Font ratio calculator",
    img: font_ratio_img,
    subtitle: "Personal project.",
    text: "Web app made with vanilla JavaScript, which calculates the ratio of the font size of the text in the input field, created for web designer & developers. Fully responsive & designed by Me.",
    liveLink: "https://sargon17.github.io/font-ratio/",
    githubLink: "https://github.com/sargon17/font-ratio",
    tech: [
      {
        name: "Figma",
        style: "blue",
      },
      {
        name: "HTML5",
        style: "orange",
      },
      {
        name: "SASS",
        style: "pink",
      },
      {
        name: "JavaScript",
        style: "yellow",
      },
    ],
  },
  {
    key: "personal-portfolio-project",
    title: "Portfolio",
    img: portfolio,
    subtitle: "Personal portfolio project.",
    text: "My personal portfolio, made with React.js, JavaScript, Sass and Bootstrap, which is fully responsive & designed by Me.",
    liveLink: "https://sargon17.github.io/my-portfolio/",
    githubLink: "https://github.com/sargon17/my-portfolio",
    tech: [
      {
        name: "Figma",
        style: "blue",
      },
      {
        name: "HTML5",
        style: "orange",
      },
      {
        name: "SASS",
        style: "pink",
      },
      {
        name: "React.js",
        style: "blue",
      },
      {
        name: "JavaScript",
        style: "yellow",
      },
      {
        name: "Bootstrap",
        style: "purple",
      },
    ],
  },
  {
    key: "mine-field-project",
    title: "Mine field",
    img: mine_field_img,
    subtitle: "Boolean Careers homework project.",
    text: "JavaScript project, which creates a mine field based on the size of the field and the number of mines, the player can chose dificulty and track the relative records. Fully responsive & designed by Me.",
    liveLink: "https://sargon17.github.io/js-campominato-dom/",
    githubLink: "https://github.com/sargon17/js-campominato-dom",
    tech: [
      {
        name: "Figma",
        style: "pink",
      },
      {
        name: "HTML5",
        style: "orange",
      },
      {
        name: "CSS3",
        style: "blue",
      },
      {
        name: "JavaScript",
        style: "yellow",
      },
    ],
  },
  {
    key: "train-ticket-project",
    title: "Train ticket generator",
    img: train_img,
    subtitle: "Boolean Careers homework project.",
    text: "A JavaScript project, which generates a train ticket based on the age of the customer and the distance of the trip. Fully responsive & designed by Me.",
    liveLink: "https://sargon17.github.io/js-biglietto-treno/",
    githubLink: "https://github.com/sargon17/js-biglietto-treno",
    tech: [
      {
        name: "Figma",
        style: "pink",
      },
      {
        name: "HTML5",
        style: "orange",
      },
      {
        name: "CSS3",
        style: "blue",
      },
      {
        name: "Bootstrap",
        style: "purple",
      },
      {
        name: "JavaScript",
        style: "yellow",
      },
    ],
  },
];

export default projects;
