import react from "react";
import { useState } from "react";

export default function NextSectionBtn(props) {
  const [nextPage, setNextPage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const windowHight = window.innerHeight;
  let pageLenght = document.body.scrollHeight;
  let pagesNumber = Math.ceil(pageLenght / windowHight);
  let currentPage;

  const handleHover = () => {
    const currentPosition = window.scrollY;
    currentPage = Math.ceil(currentPosition / windowHight);
    let nextPageN = currentPage + 1;
    setNextPage(nextPageN);
  };

  const handleMove = (n) => {
    currentPage = Math.ceil(window.scrollY / windowHight) + 1 + n;
    if (currentPage >= pagesNumber) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      handleMove(1);
    } else {
      handleMove(-1);
    }
  });
  document.addEventListener("mousemove", () => {
    handleMove(0);
  });

  return (
    <div
      className={
        isVisible
          ? "mt__next-section__btn-wrapper"
          : "mt__next-section__btn-wrapper mt__next-section__btn-wrapper--hidden"
      }
    >
      <a
        href={`#page-${nextPage}`}
        onMouseEnter={() => handleHover()}
        onClick={() => handleMove(1)}
      >
        {" "}
        <i className="fa-solid fa-chevron-down"></i>{" "}
      </a>
    </div>
  );
}
