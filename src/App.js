import "./dist/css/main.css";
import React from "react"
import Jumbotron from "./Jumbotron"
import SocialSideBar from "./SocialSideBar";
import FrontEndSection from "./FrontEndSection";

function App() {
  return (
    <div className="App">
      < SocialSideBar />
      <Jumbotron />
      <FrontEndSection />

    </div>
  );
}

export default App;
