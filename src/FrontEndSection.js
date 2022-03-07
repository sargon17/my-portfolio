import React from "react";

export default function FrontEndSection() {
  return (
    <div id="section2">
      <div className="container main-container">
        <div className="row">
          <div className="col-12 col-md-10">
            <h2>
              I am a <span className="blue-color-text">Front-End</span> Web
              Developer
            </h2>
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
