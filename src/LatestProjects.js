import React, { useState } from "react";
import Project from "./Project";
import projects from "./data/projectsData.js";
import NavigationController from "./Components/navigationController";

export default function LatestProjects(props) {
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

  return (
    <div className="mt__scroll" id={`page-${props.position}`}>
      <div className="container mt__container projects">
        <div className="row my-2 my-lg-5">
          <div className="col">
            <h2 className="mt__projects__title">
              My latest <span className="mt__t-color--blue">projects</span>
            </h2>
          </div>
        </div>
        <div className="projects__row">{getProjects(projects)}</div>
        <NavigationController items={projects.length} />
      </div>
    </div>
  );
}
