import react, { useState } from "react";
import left from "../img/chevron-left.svg";
import right from "../img/chevron-right.svg";

export default function NavigationController(props) {
  const [current, setCurrent] = useState(1);

  const handleClick = (e) => {
    if (current + e <= props.items && current + e > 0) {
      setCurrent(current + e);
    } else if (current + e > props.items) {
      setCurrent(1);
    } else if (current + e < 1) {
      setCurrent(props.items);
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
          key={i}
        ></div>
      );
    }
    return dots;
  }

  return (
    <div className="mt__projects__control">
      <a
        className="mt__control-btn"
        id="btn-left"
        href={`#project-${current}`}
        onClick={() => {
          handleClick(-1);
        }}
      >
        <img src={left} alt="left" />
      </a>
      <div className="mt__projects__index-dots">{dotsNumber(props.items)}</div>
      <a
        className="mt__control-btn"
        id="btn-right"
        href={`#project-${current}`}
        onClick={() => {
          handleClick(1);
        }}
      >
        <img src={right} alt="right" />
      </a>
    </div>
  );
}
