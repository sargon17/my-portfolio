import React from "react";
import { useState, useEffect } from "react";
import profilePhoto from "./img/profile.jpg";

export default function Jumbotron(props) {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
  const [cursor, setCursor] = useState({
    x: 10,
    y: 1000,
  });

  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const typingAnimation = async () => {
    setText("");
    setName("");
    const txt = "Hello, my name is ";
    const myName = "Mykhaylo";

    let randomSpeed = Math.floor(Math.random() * 200) + 100;

    // await before typing

    // write hello text
    for (let i = 0; i < txt.length; i++) {
      randomSpeed = Math.floor(Math.random() * 200) + 100;
      await new Promise((resolve) =>
        setTimeout(function () {
          setText((text) => text + txt.charAt(i));
          resolve();
        }, randomSpeed)
      );
    }

    // write name
    for (let i = 0; i < myName.length; i++) {
      randomSpeed = Math.floor(Math.random() * 50) + 100;
      await new Promise((resolve) =>
        setTimeout(function () {
          setName((name) => name + myName.charAt(i));
          resolve();
        }, randomSpeed)
      );
    }

    setText(txt);
    setName(myName);
  };

  useEffect(() => {
    setText("");
    setName("");
    typingAnimation();
  }, []);

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
                <span className="jumbotron__title__code">&lt;h1&gt;</span>
                {text}
                <span
                  className="mt__t-color--blue jumbotron__title__name"
                  onMouseEnter={() => setIsPhotoVisible(true)}
                  onMouseLeave={() => setIsPhotoVisible(false)}
                >
                  {name}
                </span>
                <span className="jumbotron__title__cursor"></span>
                <span className="jumbotron__title__code">&lt;/h1&gt;</span>
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
          }}
        >
          <div
            className="background"
            style={{
              backgroundImage: `url(${profilePhoto})`,
            }}
          ></div>
        </div>
        <div
          className="cursor"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            opacity: isPhotoVisible ? 1 : 0,
            zIndex: 1000,
          }}
        >
          <svg viewBox="0 0 200 200" width="200" height="200">
            <circle cx={100} cy={100} r={80} fill="none" id="curve" />
            <text fontSize={20} x={0}>
              <textPath xlinkHref="#curve">Call me Michael</textPath>
            </text>
            <text fontSize={20} x={250}>
              <textPath xlinkHref="#curve">Call me Michael</textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
