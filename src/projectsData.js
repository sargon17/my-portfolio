import train_img from "../src/img/train-ticket-project.png";
import font_ratio_img from "../src/img/font-ratio-project.jpg";
import mine_field_img from "../src/img/mine-field-project.png";

const projects = [
  {
    key: "font-ratio-project",
    title: "Font ratio calculator",
    img: font_ratio_img,
    subtitle: "Personal project.",
    text: "Web app made with vanilla JavaScript, which calculates the ratio of the font size of the text in the input field, created for web designer & developers. Fully responsive & designed by Me.",
    liveLink: "sargon17.github.io/font-ratio/",
    githubLink: "https://github.com/sargon17/font-ratio",
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
