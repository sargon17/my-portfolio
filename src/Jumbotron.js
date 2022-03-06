import React from "react";

export default function Jumbotron() {
  return (
    <div id="jumbotron">
      <div className="container main-container">
        <div className="row">
          <div className="col">
            <h1 className="jumbotron__title">
              <span className="jumbotron__title__code">&lt;h1&gt;</span>Hello,
              my name is{" "}
              <span className="blue-color-text jumbotron__title__name">
                Mykhaylo
              </span>
              <span className="jumbotron__title__code">&lt;/h1&gt;</span>
              <span className="jumbotron__title__cursor"></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="btn-wrapper">
        <a href="#section2">
          {" "}
          <i class="fa-solid fa-chevron-down"></i>{" "}
        </a>
      </div>
    </div>
  );
}
