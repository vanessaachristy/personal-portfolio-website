import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profileImage from "./vanessa2.jpg";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { Button } from "react-bootstrap";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about" id="about">
      <div className="about-title" data-aos="fade-down">
        about me.
      </div>
      <div
        className="about-container"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="about-header">
          <img src={profileImage} alt="" />
          <h1>
            Vanessa Christy Chandra <i>(she/her)</i>
          </h1>
        </div>
        <div className="about-description">
          <h2>
            As a recent graduate with a degree in Information Engineering and Media from Nanyang Technological University, I am a determined, easy-going, and hard-working individual who thrives on facing new challenges. My passion lies in fullstack development and UI/UX design, where I continually seek opportunities to expand my skills and knowledge. With a solid foundation in both front-end and back-end technologies and interface design, I am eager to contribute to innovative projects and collaborate with talented teams. I find the greatest satisfaction in problem-solving and creating efficient, user-friendly solutions. Let's connect and explore how we can work together to drive success!
          </h2>
        </div>
        <div className="about-socialmedia">
          <a href="https://github.com/vanessaachristy" target="_blank">
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vanessa-christy/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/vanessaachristy" target="_blank">
            <AiFillInstagram />
          </a>
          <Button
            className="resume-btn"
            href="https://drive.google.com/drive/folders/12SbUhCm48SBiJnytK6Z0cLXXF10cODX8?usp=drive_link"
            target=" blank"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
