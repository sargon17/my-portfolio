import React from "react";

export default function Jumbotron() {
  return (
    <div className="small-devices-hidden">
      <div className="main-container">
        <div className="title-wrapper margin-left">
          <h1>
            <span className="html-code">&lt;h1&gt;</span>Hello, my name is
            <span className="blue-color-text"> Mykhaylo</span>
            <span className="html-code">&lt;/h1&gt;</span>
            <span className="cursor"></span>
          </h1>
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
