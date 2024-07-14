import React from "react";
import { ProjectTemplate } from "../../models/Projects.models";
import { Col } from "react-bootstrap";

const ProjectCard: React.FC<{ projectTemplate: ProjectTemplate }> = ({
  projectTemplate,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-container">
        <img src={projectTemplate.imageUrl} />
        <div className="project-text">
          <h4>{projectTemplate.title}</h4>
          <p>{projectTemplate.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
