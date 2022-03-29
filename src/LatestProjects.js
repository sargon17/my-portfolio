import React from "react";
import Project from "./Project";
import projects from "./projectsData.js";

function getProjects(projects) {
  let project = projects.map((item) => {
    return (
      <Project
        title={item.title}
        img={item.img}
        subtitle={item.subtitle}
        text={item.text}
        liveLink={item.liveLink}
        githubLink={item.githubLink}
        tech={item.tech}
      />
    );
  });
  return project;
}

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
        {getProjects(projects)}
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
