import "./dist/css/main.css";
import React from "react"
import Jumbotron from "./Jumbotron"
import SocialSideBar from "./SocialSideBar";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SocialSideBar />
    </div>
  );
}

export default App;
