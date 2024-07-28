import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import { ProjectTemplate } from "../../models/Projects.models";
import ProjectCard from "./ProjectCard";
import { GradientBackground1 } from "../../assets/images";
import "./Projects.css";
import { useEffect, useState } from "react";
import { projectsArray } from "../../Data/DataTemplates";

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
              Discover a collection of projects showcasing innovative designs
              and cutting-edge technology. Explore the creativity and
              craftsmanship behind each project, bringing ideas to life in
              unique ways.
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
