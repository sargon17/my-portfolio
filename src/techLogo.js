import React from "react";

export default function TechLogo(props) {
  return (
    <div className="col-auto">
      <a href={props.link}>
        <img
          src={props.img}
          alt={`${props.name} logo`}
          className="stack-img"
        ></img>
      </a>
    </div>
  );
}
