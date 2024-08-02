import React from "react";
import { useRef } from "react";
import "./landing.css";
import coffeetop from "./coffeetop.PNG";
import coffeebottom from "./coffeebottom.PNG";
import { useEffect } from "react";
import { init } from "ityped";

export default function Landing() {
  const penOne = useRef();
  const penTwo = useRef();
  const textRef = useRef();

  const changeStyle = () => {
    if (window.pageYOffset <= (15 / 100) * window.innerWidth) {
      penOne.current.style.transform =
        "translate(-" + window.pageYOffset * 3.5 + "px," + 0 + "px)";
      penTwo.current.style.transform =
        "translate(" + window.pageYOffset * 3 + "px," + 0 + "px)";
    } else {
      fixedStyle();
    }
  };

  const fixedStyle = () => {
    penOne.current.style.transform =
      "translate(-" + (52.5 / 100) * window.innerWidth + "px, 0px)";
    penTwo.current.style.transform =
      "translate(" + (45 / 100) * window.innerWidth + "px, 0px)";
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    init(textRef.current, {
      showCursor: true,
      strings: ["Aspiring Software Engineer", "UI/UX Designer", "Dreamer"],
    });
  });

  return (
    <div>
      <div className="landing landing-back">
        <h1>Welcome</h1>
        <h3>
          <span ref={textRef}> </span>
        </h3>
      </div>
      <div className="landing landing-front">
        <div className="pen-block">
          <img
            src={coffeebottom}
            ref={penOne}
            className="pen pen-1"
            alt=""
          ></img>
          <img src={coffeetop} ref={penTwo} className="pen pen-2" alt="" />
        </div>
      </div>
    </div>
  );
}
