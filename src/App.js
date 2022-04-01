import "./dist/css/main.css";
import React from "react";
import Jumbotron from "./Jumbotron";
import SocialSideBar from "./SocialSideBar";
import FrontEndSection from "./FrontEndSection";
import MyStackSection from "./MyStackSection";
import LatestProjects from "./LatestProjects";

// Scroll slides
window.addEventListener("wheel", function (e) {
  let windowHight = window.innerHeight;
  let currentPosition = window.scrollY;

  if (currentPosition % windowHight === 0) {
    if (e.deltaY > 0) {
      this.window.scrollTo({
        top: this.window.scrollY + windowHight,
      });
    } else {
      this.window.scrollTo({
        top: this.window.scrollY - windowHight,
      });
    }
  } else {
    let difference = currentPosition % windowHight;
    if (e.deltaY > 0) {
      this.window.scrollTo({
        top: this.window.scrollY + (windowHight - difference),
      });
    } else if (e.deltaY < 0) {
      this.window.scrollTo({
        top: this.window.scrollY - difference,
      });
    }
  }
});

function App() {
  return (
    <div className="App">
      <SocialSideBar />
      <Jumbotron />
      <FrontEndSection />
      <MyStackSection />
      <LatestProjects />
    </div>
  );
}

export default App;
