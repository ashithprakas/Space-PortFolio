import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import { ProjectUrl1, ProjectUrl2, ProjectUrl3 } from "../../assets/images";
import { ProjectTemplate } from "../../models/Projects.models";
import ProjectCard from "./ProjectCard";
import { GradientBackground1 } from "../../assets/images";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              labore explicabo, libero magnam tenetur possimus nemo nesciunt eos
              officiis. Nihil odit aliquam molestias quae, voluptatem et sit
              omnis maxime quia!
            </p>
            <TabContainer id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} projectTemplate={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        src={GradientBackground1}
        alt=""
        className="background-image-left background-image-left-project"
      />
    </section>
  );
};

export default Projects;
const projects: ProjectTemplate[] = [
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
];
