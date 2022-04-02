import react, { useState } from "react";
import left from "../img/chevron-left.svg";
import right from "../img/chevron-right.svg";

function dotsNumber(number) {
  let dots = [];
  for (let i = 1; i <= number; i++) {
    dots.push(<div className="mt__projects__index-dot" id={`dot-${i}`}></div>);
  }
  return dots;
}

export default function NavigationController(props) {
  let initialCurrent = 1;

  const [current, setCurrent] = useState(initialCurrent);
  //   const [dots, setDots] = useState(dotsNumber(props.items));

  const handleClick = (e) => {
    setCurrent(dotIndex);
  };
  return (
    <div className="mt__projects__control">
      <a
        className="mt__control-btn"
        id="btn-left"
        href={`#project-${current > 1 ? current : current + 1}`}
        onClick={() => setCurrent((current) => current - 1)}
      >
        <img src={left} alt="left" />
      </a>
      <div className="mt__projects__index-dots">{dotsNumber(props.items)}</div>
      <a
        className="mt__control-btn"
        id="btn-right"
        href={`#project-${current < 3 ? current : current - 1}`}
        onClick={handleClick(1)}
      >
        <img src={right} alt="right" />
      </a>
    </div>
  );
}
