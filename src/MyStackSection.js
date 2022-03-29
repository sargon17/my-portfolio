import React from "react";
import TechLogo from "./techLogo";
import stackData from "./stackData.js";
import figma from "./img/figma.svg";
import adobe from "./img/adobe_creative-cloud.svg";
import photoshop from "./img/adobe_photoshop.svg";
import illustrator from "./img/adobe_illustrator.svg";
import lightroom from "./img/adobe_lightroom.svg";
import git_logo from "./img/Component 1.svg";
import html_logo from "./img/html_5.svg";
import css_logo from "./img/css_3.svg";
import js_logo from "./img/js.svg";
import react_logo from "./img/react.svg";
import vsc_logo from "./img/vs_code.svg";
import wordpress_logo from "./img/wordpress.svg";
import sass_logo from "./img/sass-logo 1.svg";
import bootstrap from "./img/bootstrap.svg";
import vue from "./img/vue-icon.svg";

function getStack(stack) {
  let stackLogo = stack.map((item) => {
    return (
      <TechLogo
        name={item.name}
        link={item.link}
        img={item.img}
        key={item.name}
      />
    );
  });
  return stackLogo;
}

export default function MyStackSection() {
  return (
    <div id="section3">
      <div className="mt__container">
        <div className="container">
          <div className="row"></div>
          <div className="row my-md-4">
            <div className="col-12 col-md-10">
              <h2>My tech stack:</h2>
              <div className="row">
                <div className="col">
                  <h3 className="mt__t-color--blue">Design</h3>
                  <div className="row g-2 g-md-4">
                    {getStack(stackData.design)}
                  </div>
                </div>
              </div>
              <div className="row my-md-4">
                <div className="col">
                  <h3 className="mt__t-color--blue">Development</h3>
                  <div className="row g-2 g-md-4">
                    {getStack(stackData.development)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-wrapper">
              <a href="#latest_project-1">
                {" "}
                <i className="fa-solid fa-chevron-down"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
