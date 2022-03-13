import React from "react";
import train_img from "../src/img/train-ticket-project.png";

export default function LatestProjects() {
  return (
    <div id="latest_project-1">
      <div className="container mt__container projects">
        <div className="row my-2 my-lg-5">
          <div className="col">
            <h2>
              My latest <span className="mt__t-color--blue">projects</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <a href="https://sargon17.github.io/js-biglietto-treno/">
              <img src={train_img} alt="" className="projects__image" />
            </a>
          </div>
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center">
            <div className="row my-2 my-lg-4">
              <div className="col">
                <h3 className="mt__t-color--blue fw-bold">
                  Train ticket generator
                </h3>
              </div>
            </div>
            <div className="row my-lg-4">
              <div className="col">
                <h4 className="mt__t-font--plex-serif fw-bold">
                  <span href="#" className="mt__t-color--blue">
                    Boolean Careers
                  </span>{" "}
                  homework project
                </h4>
                <p className="fw-bold mt__t-color--grey">
                  Simple JavaScript project, which generates a train ticket
                  based on the age of the customer and the distance of the trip.{" "}
                  <br />
                  Fully responsive & designed by Me.
                </p>
              </div>
            </div>
            <div className="row my-lg-4">
              <div className="col">
                <h4 className="mt__t-font--plex-serif">Tech stack:</h4>
                <div className="row g-2">
                  <div className="col col-auto">
                    <a href="#" className="mt__tag mt__tag--pink">
                      Figma
                    </a>
                  </div>
                  <div className="col col-auto">
                    <a href="#" className="mt__tag mt__tag--orange">
                      HTML5
                    </a>
                  </div>
                  <div className="col col-auto">
                    <a href="#" className="mt__tag mt__tag--blue">
                      CSS3
                    </a>
                  </div>
                  <div className="col col-auto">
                    <a href="#" className="mt__tag mt__tag--purple">
                      Bootstrap
                    </a>
                  </div>
                  <div className="col col-auto">
                    <a href="#" className="mt__tag mt__tag--yellow">
                      JavaScript
                    </a>
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
            <div className="btn-wrapper btn-wrapper--none">
              <a href="#section3">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
