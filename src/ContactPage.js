import React from "react";
import { useState } from "react";

export default function ContactPage(props) {
  const [selected, setSelected] = useState("");
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div
        id={`page-${props.position}`}
        className="mt__scroll mt__bg-dark mt__contact-page"
      >
        <div className="container mt__container">
          <div className="row">
            <div className="col-12 col-md-10">
              <h1 className="title">Contact me:</h1>
              <div className="contact-list">
                <div
                  className={`contact-list__item ${
                    selected !== "" && selected !== 1 ? "unhovered" : ""
                  }`}
                  onMouseEnter={() => setSelected(1)}
                  onMouseLeave={() => setSelected("")}
                >
                  <a
                    href="https://www.linkedin.com/in/mykhaylo-tymofyeyev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-list__item__link"
                  >
                    <span>
                      linkedin.com
                      <span className="accent">/in/</span>
                      mykhaylo-tymofyeyev
                    </span>
                  </a>
                </div>
                <div
                  className={`contact-list__item ${
                    selected !== "" && selected !== 2 ? "unhovered" : ""
                  }`}
                  onMouseEnter={() => setSelected(2)}
                  onMouseLeave={() => setSelected("")}
                >
                  <a
                    href="mailto:mykhaylo.tymofyeyev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-list__item__link"
                  >
                    <span>mykhaylo.tymofyeyev</span>
                    <span className="accent">@gmail.com</span>
                  </a>
                </div>
                <div
                  className={`contact-list__item ${
                    selected !== "" && selected !== 3 ? "unhovered" : ""
                  }`}
                  onMouseEnter={() => setSelected(3)}
                  onMouseLeave={() => setSelected("")}
                >
                  <a
                    href="https://t.me/Mykhaylo17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-list__item__link"
                  >
                    <span>t.me/</span>
                    <span className="accent">Mykhaylo17</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Mykhaylo Tymofyeyev © {currentYear}</p>
          </div>
        </div>
      </div>
    </>
  );
}
