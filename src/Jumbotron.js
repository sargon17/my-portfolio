import React from "react";
import { useState, useEffect } from "react";
import profilePhoto from "./img/profile.jpg";

export default function Jumbotron(props) {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
  const [cursor, setCursor] = useState({
    x: 10,
    y: 1000,
  });

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    if (isPhotoVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }
  }, [isPhotoVisible]);

  return (
    <>
      <div id={`page-${props.position}`} className="mt__scroll">
        <div className="container mt__container">
          <div className="row">
            <div className="col-12 col-md-10">
              <h1 className="jumbotron__title">
                <span className="jumbotron__title__code">&lt;h1&gt;</span>Hello,
                my name is{" "}
                <span
                  className="mt__t-color--blue jumbotron__title__name"
                  onMouseEnter={() => setIsPhotoVisible(true)}
                  onMouseLeave={() => setIsPhotoVisible(false)}
                >
                  Mykhaylo
                </span>
                <span className="jumbotron__title__code">&lt;/h1&gt;</span>
                <span className="jumbotron__title__cursor"></span>
              </h1>
            </div>
          </div>
        </div>
        <div
          className="cursor"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            opacity: isPhotoVisible ? 1 : 0,
            backgroundImage: `url(${profilePhoto})`,
          }}
        ></div>
      </div>
    </>
  );
}
