import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iNotebook from "../../Assets/Projects/Xnotebook.png";
import drag from "../../Assets/Projects/drag.png";
import infiniteloader from "../../Assets/Projects/infiniteloader.png";
import chatify from "../../Assets/Projects/XchatApp.png";

import crypto from "../../Assets/Projects/Xcrypto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Talk-A-TIVE"
              description="Full-fledged social media app, encompassing real-time messaging,individual Chat, group Chat and much more. Real-time messaging using Socket.io for instantaneous communication."

              ghLink="https://github.com/AKESARWANI12/TAIK-A-TIVE"
              demoLink="https://taik-a-tive-client.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-web-app"
              description="Designed and implemented a user-friendly interface using React.js for real-time insights into the cryptocurrency
market(Crypto-web-app).Implemented Pagination Techniques to efficiently manage and display large sets of data"
              ghLink="https://github.com/AKESARWANI12/crypto_web_app"
              demoLink="https://kaleidoscopic-sprinkles-ce3b71.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNotebook}
              isBlog={false}
              title="iNotebook"
              description=" A user can signUp to create an account so he can store his notes. Further, notes can be retrieved by logging in
with the credentials used at the time of signUp.An extra level security is added by storing encrypted passwords on backend rather than plain text.
"
              ghLink="https://github.com/AKESARWANI12/iNotebook"
              demoLink="https://inotebook-frontend-8cd1.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drag}
              isBlog={false}
              title="Drag And Drop"
              description="Create an intuitive user experience with our drag-and-drop website powered by JavaScript. Effortlessly organize and customize content by dragging elements, providing a seamless and engaging interaction for users."
              ghLink="https://github.com/AKESARWANI12/DragAndDropJs"
              demoLink="drag-and-drop-js-ruddy.vercel.app"
            />
          </Col>

   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infiniteloader}
              isBlog={false}
              title="Infinite Blog Loader"
              description="Discover endless content effortlessly with our dynamic page that showcases a list of items. As you scroll down, additional items seamlessly load, ensuring a continuous and immersive browsing experience."
              ghLink="https://github.com/AKESARWANI12/INFINITE-SCROLLER"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
