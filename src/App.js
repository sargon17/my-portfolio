import "./dist/css/main.css";
import React from "react";
import { useState } from "react";

import Jumbotron from "./Jumbotron";
import SocialSideBar from "./SocialSideBar";
import FrontEndSection from "./FrontEndSection";
import MyStackSection from "./MyStackSection";
import LatestProjects from "./LatestProjects";
import ContactPage from "./ContactPage";
import NextSectionBtn from "./Components/NextSectionBtn.js";

function App() {
  const [position, setPosition] = useState(0);
  const maxPage = 4;
  // Scroll slides
  window.addEventListener("wheel", function (e) {
    let windowHight = window.innerHeight;
    let currentPosition = window.scrollY;
    let currentSection = Math.floor(currentPosition / windowHight);

    if (currentPosition % windowHight === 0) {
      if (e.deltaY > 0) {
        this.window.scrollTo({
          top: this.window.scrollY + windowHight,
        });
        setPosition(
          maxPage === currentSection ? currentSection : currentSection + 1
        );
      } else {
        this.window.scrollTo({
          top: this.window.scrollY - windowHight,
        });
        setPosition(currentSection - 1);
      }
    } else {
      let difference = currentPosition % windowHight;
      if (e.deltaY > 0) {
        this.window.scrollTo({
          top: this.window.scrollY + (windowHight - difference),
        });
        setPosition(
          maxPage === currentSection ? currentSection : currentSection + 1
        );
      } else if (e.deltaY < 0) {
        this.window.scrollTo({
          top: this.window.scrollY - difference,
        });
        setPosition(currentSection - 1);
      }
    }
  });
  return (
    <div className="App">
      <SocialSideBar display={position === 4 ? false : true} />
      <NextSectionBtn />
      <Jumbotron position="0" />
      <FrontEndSection position="1" />
      <MyStackSection position="2" />
      <LatestProjects position="3" />
      <ContactPage position="4" />
    </div>
  );
}

export default App;
