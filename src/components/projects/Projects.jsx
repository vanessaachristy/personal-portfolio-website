import React, { useEffect, useState } from "react";
import Aos from "aos";
import "./project.css";
import { projectData } from "../../data/ProjectData";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  });

  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({
    id: "",
    title: "",
    date: "",
    img: "",
    gif: "",
    tools: "",
    description: "",
    web: "",
    github: "",
  });

  const showModal = (
    title,
    date,
    img,
    gif,
    tools,
    description,
    web,
    github
  ) => {
    setProject({
      title: title,
      date: date,
      img: img,
      gif: gif,
      tools: tools,
      description: description,
      web: web,
      github: github,
    });
    setOpenModal(true);
  };

  const ProjectModal = () => {
    return (
      <Modal
        className="project-modal"
        show={openModal}
        onHide={() => {
          setOpenModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={project.gif} alt="" />
          <p>
            <i>{project.date}</i>
          </p>
          <h5>{project.tools}</h5>

          <p>{project.description}</p>
        </Modal.Body>
        <Modal.Footer>
          {project.github !== "" ? (
            <Button
              variant="secondary"
              onClick={() => {
                window.open(project.github, "_blank").focus();
              }}
              className="project-btn"
            >
              <AiFillGithub />
            </Button>
          ) : (
            <></>
          )}

          <Button
            variant="secondary"
            onClick={() => {
              window.open(project.web, "_blank").focus();
            }}
          >
            Demo
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <div>
      <div className="projects" id="projects">
        <ProjectModal />
        <div className="projects-title" data-aos="fade-up">
          my recent projects.
        </div>
        <div className="project-container">
          {projectData.map((d) => (
            <div
              className="project-box"
              data-aos={d.id % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <img src={d.img} alt="" />
              <div className="overlay">
                <div className="overlay-title">
                  <h1>{d.title}</h1>
                  <h5>{d.tools}</h5>
                </div>

                <div
                  className="overlay-btn"
                  onClick={() =>
                    showModal(
                      d.title,
                      d.date,
                      d.img,
                      d.gif,
                      d.tools,
                      d.description,
                      d.web,
                      d.github
                    )
                  }
                >
                  more details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
