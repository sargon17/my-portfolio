import React from "react";
import instagram from "./img/instagram.svg";
import linkedin from "./img/linkedin.svg";
import GitHub from "./img/GitHub.svg";
import telegram from "./img/telegram.svg";
import gmail from "./img/gmail.svg";

export default function SocialSideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <a href="https://instagram.com/tymofyeyev?utm_medium=copy_link">
            <img src={instagram}></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mykhaylo-tymofyeyev">
            <img src={linkedin}></img>
          </a>
        </li>
        <li>
          <a href="https://github.com/sargon17">
            <img src={GitHub}></img>
          </a>
        </li>
        <li>
          <a href="https://t.me/Mykhaylo17">
            <img src={telegram}></img>
          </a>
        </li>
        <li>
          <a href="mailto:mykhaylo.tymofyeyev@gmail.com">
            <img src={gmail}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
