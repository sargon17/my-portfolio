import "./dist/css/main.css";
import React from "react"
import Jumbotron from "./Jumbotron"
import SocialSideBar from "./SocialSideBar";
import FrontEndSection from "./FrontEndSection";
import SmallDevicesWindow from "./SmallDevicesWindow";

function App() {
  return (
    <div className="App">
      < SocialSideBar />
      <Jumbotron />
      <FrontEndSection />

      <SmallDevicesWindow />
    </div>
  );
}

export default App;
