import React from "react";
import Project from "./Project";
import projects from "./data/projectsData.js";
import left from "./img/chevron-left.svg";
import right from "./img/chevron-right.svg";

function getProjects(projects) {
  let index = 0;
  let project = projects.map((item) => {
    index++;
    return (
      <Project
        index={`project-${index}`}
        key={item.key}
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
    <div className="mt__scroll">
      <div className="container mt__container projects">
        <div className="row my-2 my-lg-5">
          <div className="col">
            <h2>
              My latest <span className="mt__t-color--blue">projects</span>
            </h2>
          </div>
        </div>
        <div className="projects__row">{getProjects(projects)}</div>
        <div className="mt__projects__control">
          <div className="mt__control-btn">
            <img src={left} alt="left" />
          </div>
          <div className="mt__projects__index-dots">
            <div className="mt__projects__index-dot mt__projects__index-dot--active"></div>
            <div className="mt__projects__index-dot"></div>
            <div className="mt__projects__index-dot"></div>
          </div>
          <div className="mt__control-btn">
            <img src={right} alt="right" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-wrapper opacity-0">
              <a href="#">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
