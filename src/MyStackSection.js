import React from "react";
import figma from "./img/figma.svg"
import adobe from "./img/adobe_creative-cloud.svg"
import photoshop from "./img/adobe_photoshop.svg"
import illustrator from "./img/adobe_illustrator.svg"
import lightroom from "./img/adobe_lightroom.svg"
import git_logo from "./img/Component 1.svg"
import html_logo from "./img/html_5.svg"
import css_logo from "./img/css_3.svg"
import js_logo from "./img/js.svg"
import react_logo from "./img/react.svg"
import vsc_logo from "./img/vs_code.svg"
import wordpress_logo from "./img/wordpress.svg"
import sass_logo from "./img/sass-logo 1.svg"




export default function MyStackSection() {
  return (
    <div className="small-devices-hidden my-stack-section" id="section3">
      <div className="main-container margin-left">
        <div>
          <h2>My tecnology stack:</h2>
          <div className="stack-wrapper">
            <h3>Design</h3>
            <ul className="flex-component">
               <li><a href="https://www.figma.com"><img src={figma} alt="figma logo"></img></a></li>
               <li><a href="https://www.adobe.com/creativecloud.html"><img src={adobe} alt="adobe logo"></img></a></li>
               <li><a href="https://www.adobe.com/products/photoshop.html"><img src={photoshop} alt="photoshop logo"></img></a></li>
               <li><a href="https://www.adobe.com/products/illustrator.html"><img src={illustrator} alt="illustrator logo"></img></a></li>
               <li><a href="https://www.adobe.com/products/photoshop-lightroom.html"><img src={lightroom} alt="lightroom logo"></img></a></li>
            </ul>
          </div>
          <div className="stack-wrapper">
            <h3>Development</h3>
            <ul className="flex-component">
               <li><a href="https://git-scm.com/"><img src={git_logo} alt="git logo"></img></a></li>
               <li><a href="https://html.spec.whatwg.org/"><img src={html_logo} alt="html logo"></img></a></li>
               <li><a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src={css_logo} alt="css logo"></img></a></li>
               <li><a href="https://sass-lang.com/"><img src={sass_logo} alt="Sass logo"></img></a></li>
               <li><a href="https://developer.mozilla.org/en-US/docs/Web/javascript"><img src={js_logo} alt="JavaScript logo"></img></a></li>
               <li><a href="https://reactjs.org/"><img src={react_logo} alt="React logo"></img></a></li>
               <li><a href="https://code.visualstudio.com/"><img src={vsc_logo} alt="Visual Studio Code logo"></img></a></li>
               <li><a href="https://wordpress.org/"><img src={wordpress_logo} alt="Wordpress logo"></img></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <a href="#">
          {" "}
          <i class="fa-solid fa-chevron-down"></i>{" "}
        </a>
      </div>
    </div>
  );
}
