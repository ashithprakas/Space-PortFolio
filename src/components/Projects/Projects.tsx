import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import { ProjectUrl1, ProjectUrl2, ProjectUrl3 } from "../../assets/images";
import { ProjectTemplate } from "../../models/Projects.models";
import ProjectCard from "./ProjectCard";
import { GradientBackground1 } from "../../assets/images";
import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [noOfPanels, setNoOfPanels] = useState(0);
  const itemsPerPage: number = 3;
  const [projectsTemplate, setProjectTemplate] =
    useState<ProjectTemplate[][]>();

  useEffect(() => {
    setNoOfPanels(Math.ceil(projectsArray.length / itemsPerPage));

    setProjectTemplate(
      projectsArray.reduce(() => {
        return Array.from({ length: Math.ceil(noOfPanels) }, (_, index) => {
          return projectsArray.slice(
            index * itemsPerPage,
            index * itemsPerPage + itemsPerPage
          );
        });
      }, [])
    );
  }, [noOfPanels]);
  return (
    <section className="projects" id="projects">
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
            <TabContainer id="projects-tab" defaultActiveKey="1">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                {Array.from({ length: noOfPanels }, (_, index) => {
                  return (
                    <Nav.Item>
                      <Nav.Link eventKey={index + 1}>Tab {index + 1}</Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
              <Tab.Content>
                {projectsTemplate?.map((subTemplate, index) => {
                  return (
                    <Tab.Pane eventKey={index + 1}>
                      {
                        <Row>
                          {subTemplate.map((project, subindex) => {
                            return (
                              <ProjectCard
                                projectTemplate={project}
                                key={subindex + 1}
                              />
                            );
                          })}
                        </Row>
                      }
                    </Tab.Pane>
                  );
                })}
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
const projectsArray: ProjectTemplate[] = [
  {
    title: "Business Startup1",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup2",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup3",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup4",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup5",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup6",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup7",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup8",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup9",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup10",
    description: "Design and development",
    imageUrl: ProjectUrl1,
  },
  {
    title: "Business Startup11",
    description: "Design and development",
    imageUrl: ProjectUrl2,
  },
  {
    title: "Business Startup12",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
  {
    title: "Business Startup13",
    description: "Design and development",
    imageUrl: ProjectUrl3,
  },
];
