import React from "react";
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

export default function MyStackSection() {
  return (
    <div id="section3">
      <div className="main-container">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-12 col-md-10">
              <h2>My tech stack:</h2>
              <div className="row">
                <div className="col">
                  <h3>Design</h3>
                  <div className="row g-2 g-md-4">
                    <div className="col-auto">
                      <a href="https://www.figma.com">
                        <img
                          src={figma}
                          alt="figma logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.adobe.com/creativecloud.html">
                        <img
                          src={adobe}
                          alt="adobe logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.adobe.com/products/photoshop.html">
                        <img
                          src={photoshop}
                          alt="photoshop logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.adobe.com/products/illustrator.html">
                        <img
                          src={illustrator}
                          alt="illustrator logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.adobe.com/products/photoshop-lightroom.html">
                        <img
                          src={lightroom}
                          alt="lightroom logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3>Development</h3>
                  <div className="row g-2 g-md-4">
                    <div className="col-auto">
                      <a href="https://git-scm.com/">
                        <img
                          src={git_logo}
                          alt="git logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <img
                          src={html_logo}
                          alt="html logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                        <img
                          src={css_logo}
                          alt="css logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                        <img
                          src={js_logo}
                          alt="javascript logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://reactjs.org/">
                        <img
                          src={react_logo}
                          alt="react logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://code.visualstudio.com/">
                        <img
                          src={vsc_logo}
                          alt="vsc_logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://sass-lang.com/">
                        <img
                          src={sass_logo}
                          alt="sass_logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://getbootstrap.com/">
                        <img
                          src={bootstrap}
                          alt="bootstrap logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://wordpress.org/">
                        <img
                          src={wordpress_logo}
                          alt="wordpress logo"
                          className="stack-img"
                        ></img>
                      </a>
                    </div>
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
              <a href="#section3">
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
