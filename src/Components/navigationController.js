import react from "react";
import left from "../img/chevron-left.svg";
import right from "../img/chevron-right.svg";

function dotsNumber(number) {
  let dots = [];
  for (let i = 1; i <= number; i++) {
    dots.push(<div className="mt__projects__index-dot" id={`dot-${i}`}></div>);
  }
  return dots;
}
const [current, setCurrent] = useState(1);

setCurrent(current, value) {
  return current + value;
};

export default function NavigationController(props) {
  //   const [dots, setDots] = useState(dotsNumber(props.items));

  return (
    <div className="mt__projects__control">
      <a
        className="mt__control-btn"
        id="btn-left"
        href={`#project-${index > 1 ? --index : index}`}
      >
        <img src={left} alt="left" />
      </a>
      <div className="mt__projects__index-dots">{dotsNumber(props.items)}</div>
      <a
        className="mt__control-btn"
        id="btn-right"
        href={`#project-${index < props.items ? ++index : index}`}
      >
        <img src={right} alt="right" />
      </a>
    </div>
  );
}
