import react from "react";
import { useState } from "react";

export default function NextSectionBtn() {
  const [nextPage, setNextPage] = useState(1);

  const handleClick = () => {
    const windowHight = window.innerHeight;
    const currentPosition = window.scrollY;
    let pageLenght = document.body.scrollHeight;
    let pagesNumber = Math.ceil(pageLenght / windowHight);
    let currentPage = Math.ceil(currentPosition / windowHight);
    let nextPageN = currentPage + 1;
    setNextPage(nextPageN);
    console.log(nextPage);
  };

  return (
    <div className="mt__next-section__btn-wrapper">
      <a href={`#page-${nextPage}`} onMouseEnter={() => handleClick()}>
        {" "}
        <i className="fa-solid fa-chevron-down"></i>{" "}
      </a>
    </div>
  );
}
