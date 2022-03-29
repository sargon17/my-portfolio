import React from "react";

export default function FrontEndSection() {
  return (
    <div id="section2" className="mt__bg-dark mt__scroll">
      <div className="container mt__container">
        <div className="row">
          <div className="col-12 col-md-10">
            <h2 className="mt__t-color--white">
              I am a <span className="mt__t-color--blue">Front-End</span> Web
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
