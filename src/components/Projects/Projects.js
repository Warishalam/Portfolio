import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import Aha from "../../Assets/Projects/aha.jpg";
import Freshly from "../../Assets/Projects/Freshly.jpg";
import Calculator from "../../Assets/Projects/Calculator.jpg";
import Weather from "../../Assets/Projects/Weather.jpg";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: Aha,
    title: "Aha Clone",
    description: "Aha is an Indian subscription video on demand and over-the top streaming service which offers Telugu and Tamil Language.",
    link: "https://github.com/Warishalam/aha.video-clone",
    demo: "https://warishalam.github.io/aha.video-clone/",
    stack: ["html", "css", "javascript"]
  },
  {
    imgPath: Freshly,
    title: "Freshly Clone",
    description: "Freshly is a New York-based prepared meal delivery company that delivers throughout the United the States Founded by Michael Wystrach and Carter Comstock.",
    link: "https://github.com/Warishalam/Freshly-App.git",
    demo: "https://warishalam.github.io/Freshly-App/",
    stack: ["html", "css", "javascript","git"]
  },
  {
    imgPath: Calculator,
    title: "Calculator Clone",
    description: "An electronic calculator is typically a portable electronic device used to perform calculation,ranging from basic arithmetic to complex mathematics.",
    link: "https://github.com/Warishalam/Calculator_App.git",
    demo: "https://warishalam.github.io/Calculator_App/",
    stack: ["javascript","html", "css", "git"]
  },
  {
    imgPath: Weather,
    title: "Weather Clone",
    description: "Our Weather Forecast App Development enables the user to add numerous locations to the list to verify the weather data accordingly.",
    link: "https://github.com/Warishalam/Weather-Application.git",
    demo: "https://warishalam.github.io/Weather-Application/",
    stack: ["javascript", "html", "css", "git"]
  }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", gap: "0.5rem" }}>
          {
            projects.map(project => (
              <Col key={project.title} xs={12} sm={10} lg={6} className="project-card">
                <ProjectCard
                  {...project}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
