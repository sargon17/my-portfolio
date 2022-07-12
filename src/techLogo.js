import React from "react";

export default function TechLogo(props) {
  return (
    <div className="col-auto">
      <div className="stack-img">
        <a href={props.link}>
          <img src={props.img} alt={`${props.name} logo`}></img>
        </a>
      </div>
    </div>
  );
}
