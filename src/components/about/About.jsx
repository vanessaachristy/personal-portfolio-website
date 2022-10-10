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
            I'm a peneultimate undergraduate student majoring in Information
            Engineering and Media at Nanyang Technological University. I'm a
            very determined, easy-going, and hard-working person who gains the
            most satisfaction at work when I am faced with new challenges.
            Currently, I am really interested in the software development and
            UI/UX design field.
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
            href="https://drive.google.com/file/d/1CCrf2jbHzHGmfyglT7xfYnD2x9TRCaXb/view?usp=sharing"
            target=" blank"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
