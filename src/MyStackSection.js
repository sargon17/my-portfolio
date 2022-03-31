import React from "react";
import TechLogo from "./techLogo";
import stackData from "./data/stackData.js";

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
    <div id="section3" className="mt__scroll">
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
