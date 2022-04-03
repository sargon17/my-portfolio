import react, { useState } from "react";

import left from "../img/chevron-left.svg";
import right from "../img/chevron-right.svg";

export default function NavigationController(props) {
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    console.log("e", e);
    if (current + e < props.items && current + e >= 0) {
      setCurrent(current + e);
    } else if (current + e >= props.items - 1) {
      setCurrent(0);
    } else if (current + e < 0) {
      setCurrent(props.items - 1);
    }
  };

  function dotsNumber(number) {
    let dots = [];
    for (let i = 1; i <= number; i++) {
      dots.push(
        <div
          className={
            i === current
              ? "mt__projects__index-dot mt__projects__index-dot--active"
              : "mt__projects__index-dot"
          }
          id={`dot-${i}`}
        ></div>
      );
    }
    return dots;
  }

  function slideProject() {
    console.log(current);
    let element = document.querySelector(".projects__row");
    let maxWidth = element.scrollWidth;
    let childWhidth = element.children[0].offsetWidth;
    let childNumber = element.children.length;
    let difference = (maxWidth - childWhidth * childNumber) / (childNumber - 1);

    let coordinates = [];
    for (let index = 0; index < props.items; index++) {
      let translate = (childWhidth + difference) * index;
      coordinates.push(index * translate);
    }
    console.log("debug == coordinates", coordinates);
    console.log("debug == coordinates", coordinates[current]);

    element.scrollTo({
      top: 0,
      left: coordinates[current],
      behavior: "smooth",
    });
  }

  return (
    <div className="mt__projects__control">
      <div
        className="mt__control-btn"
        id="btn-left"
        onClick={() => {
          handleClick(-1);
          slideProject();
        }}
      >
        <img src={left} alt="left" />
      </div>
      <div className="mt__projects__index-dots">{dotsNumber(props.items)}</div>
      <div
        className="mt__control-btn"
        id="btn-right"
        href=""
        onClick={() => {
          handleClick(1);
          slideProject();
        }}
      >
        <img src={right} alt="right" />
      </div>
    </div>
  );
}
