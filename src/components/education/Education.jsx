import Aos from "aos";
import React, { useEffect } from "react";
import "./education.css";
import ntu from "./ntu.png";
import ipeka from "./ipeka.png";

export default function Education() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="education" id="education">
      <div className="education-title" data-aos="fade-down">
        education.
      </div>
      <div className="education-container">
        <div
          className="education-box"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="education-logo">
            <img src={ntu} />
          </div>
          <div className="education-description">
            <h1>Nanyang Technological University, Singapore</h1>
            <h3>
              Bachelor of Information Engineering and Media <i>(2020-2024)</i>
            </h3>
            <br />
            <h3>4.5/5.0 Honours (Highest Distinction)</h3>
            <br />
            <h3>Relevant courses:</h3>
            <p>
              Object-Oriented Programming, Data Structures and Algorithm, Intro
              to Data Science & Artificial Intelligence, Software Engineering,
              Computer Communication, Operating Systems, Intro to Design &
              Project, Design & Innovation Project, Web Application Design, Database System
            </p>
            <br />
            <h3>Achievement:</h3>
            <p>• 2nd Place Winner of NTU EEE Week: Hackeeethon 1.0</p>
          </div>
        </div>
        <div
          className="education-box"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="education-logo">
            <img src={ipeka} />
          </div>
          <div className="education-description">
            <h1>IPEKA Christian High School, Jakarta, Indonesia</h1>
            <h3>
              Natural Science Stream <i>(2017-2020)</i>
            </h3>
            <br />
            <h3>Achievement:</h3>
            <p>• Top 3 Natural Science Stream Graduates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
