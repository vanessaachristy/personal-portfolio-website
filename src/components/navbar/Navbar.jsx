import React, { useEffect } from "react";
import { useState } from "react";
import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [active, setActive] = useState("");

  const changeNavbar = () => {
    if (window.scrollY < 0.2 * window.innerWidth) {
      setActive("");
    }
    if (
      window.scrollY <= 0.7 * window.innerWidth &&
      window.scrollY >= 0.2 * window.innerWidth
    ) {
      setActive("about");
    }
    if (
      window.scrollY > 0.7 * window.innerWidth &&
      window.scrollY <= 1.1 * window.innerWidth
    ) {
      setActive("work");
    }
    if (
      window.scrollY > 1.1 * window.innerWidth &&
      window.scrollY <= 1.6 * window.innerWidth
    ) {
      setActive("education");
    }
    if (window.scrollY > 1.6 * window.innerWidth) {
      setActive("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  });

  return (
    <div className="topbar">
      <ul id="menu" className={clicked ? "#menu active" : "#menu"}>
        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            about
          </a>
        </li>
        <li>
          <a href="#work" className={active === "work" ? "active" : ""}>
            work
          </a>
        </li>
        <li>
          <a
            href="#education"
            className={active === "education" ? "active" : ""}
          >
            education
          </a>
        </li>
        <li>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            projects
          </a>
        </li>
      </ul>

      <div id="mobile" onClick={handleClick}>
        <i>{clicked ? <AiOutlineClose /> : <AiOutlineMenu />}</i>
      </div>
    </div>
  );
}
