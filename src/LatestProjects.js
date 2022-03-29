import React from "react";
import Project from "./Project";
import projects from "./projectsData.js";

function getProjects(projects) {
  let index = 1;
  let project = projects.map((item) => {
    let projectId = `latest_project-${index}`;
    let nextProjectId = `#latest_project-${index + 1}`;
    index++;
    console.log(projects);
    return (
      <div id={projectId}>
        <div className="container mt__container projects">
          <div className="row my-2 my-lg-5">
            <div className="col">
              <h2>
                My latest <span className="mt__t-color--blue">projects</span>
              </h2>
            </div>
          </div>
          <Project
            title={item.title}
            img={item.img}
            subtitle={item.subtitle}
            text={item.text}
            liveLink={item.liveLink}
            githubLink={item.githubLink}
            tech={item.tech}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className={
                  index - 1 === projects.length
                    ? "btn-wrapper btn-wrapper--none"
                    : "btn-wrapper"
                }
              >
                <a href={nextProjectId}>
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return project;
}

export default function LatestProjects() {
  return getProjects(projects);
}
