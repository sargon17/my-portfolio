import React from "react";

export default function Jumbotron(props) {
  return (
    <div id={`page-${props.position}`} className="mt__scroll">
      <div className="container mt__container">
        <div className="row">
          <div className="col-12 col-md-10">
            <h1 className="jumbotron__title">
              <span className="jumbotron__title__code">&lt;h1&gt;</span>Hello,
              my name is{" "}
              <span className="mt__t-color--blue jumbotron__title__name">
                Mykhaylo
              </span>
              <span className="jumbotron__title__code">&lt;/h1&gt;</span>
              <span className="jumbotron__title__cursor"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
