import react from "react";
import left from "../img/chevron-left.svg";
import right from "../img/chevron-right.svg";

export default function NavigationController({ items, current, setCurrent }) {
  const handleClick = (e) => {
    if (current + e <= items && current + e > 0) {
      setCurrent(current + e);
    } else if (current + e > items) {
      setCurrent(1);
    } else if (current + e < 1) {
      setCurrent(items);
    }
  };

  function handleBack() {
    if (current > 1) {
      setCurrent(current - 1);
    } else if (current === 1) {
      setCurrent(items);
    }
  }
  function handleForward() {
    if (current < items) {
      setCurrent(current + 1);
    } else if (current === items) {
      setCurrent(1);
    }
  }

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
      <button
        className="mt__control-btn"
        id="btn-left"
        onClick={() => {
          // handleClick(-1);
          handleBack();
        }}
      >
        <img src={left} alt="left" />
      </button>
      <div className="mt__projects__index-dots">{dotsNumber(items)}</div>
      <button
        className="mt__control-btn"
        id="btn-right"
        onClick={() => {
          // handleClick(1);
          handleForward();
        }}
      >
        <img src={right} alt="right" />
      </button>
    </div>
  );
}
