import React from "react";
import StackTag from "./StackTag";

function getStack(stack) {
  // console.log(stack);
  let stackLogo = stack.map((item) => {
    console.log(item);
    return <StackTag tech={item.name} style={item.style} />;
  });
  return stackLogo;
}

export default function Project(props) {
  return (
    <div className={props.visibility} id={props.index} key={props.key}>
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 mb-2 mb-md-0">
          <a href={props.liveLink}>
            <img src={props.img} alt="" className="projects__image" />
          </a>
        </div>
        <div className="col-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center">
          <div className="row my-2 my-lg-4">
            <div className="col mb-2 mb-md-0">
              <h3 className="mt__t-color--blue fw-bold">{props.title}</h3>
              <a href={props.liveLink}>Live Version</a>
              {" | "}
              <a href={props.githubLink}>Github</a>
            </div>
          </div>
          <div className="row my-lg-4 mb-2 mb-md-0">
            <div className="col">
              <h4 className="mt__t-font--plex-serif fw-bold">
                {props.subtitle}
              </h4>
              <p className="fw-bold mt__t-color--grey">{props.text}</p>
            </div>
          </div>
          <div className="row my-lg-4">
            <div className="col">
              <h4 className="mt__t-font--plex-serif">Tech stack:</h4>
              <div className="row g-2">{getStack(props.tech)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
