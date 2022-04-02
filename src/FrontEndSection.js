import React from "react";

export default function FrontEndSection(props) {
  return (
    <div id={`page-${props.position}`} className="mt__bg-dark mt__scroll">
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
    </div>
  );
}
