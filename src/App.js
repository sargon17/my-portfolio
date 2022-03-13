import "./dist/css/main.css";
import React from "react";
import Jumbotron from "./Jumbotron";
import SocialSideBar from "./SocialSideBar";
import FrontEndSection from "./FrontEndSection";
import MyStackSection from "./MyStackSection";
import LatestProjects from "./LatestProjects";

function App() {
  return (
    <div className="App">
      <SocialSideBar />
      <Jumbotron />
      <FrontEndSection />
      <MyStackSection />
      <LatestProjects />

      {/* <SmallDevicesWindow /> */}
    </div>
  );
}

export default App;
