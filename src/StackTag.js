import React from "react";

export default function stackTag(props) {
  let style = `mt__tag mt__tag--${props.style}`;
  return (
    <div className="col col-auto">
      <p href="#" className={style}>
        {props.tech}
      </p>
    </div>
  );
}
