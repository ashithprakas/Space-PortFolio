import React from "react";
import { ProjectTemplate } from "../../models/Projects.models";
import { Col } from "react-bootstrap";
import { GitHubLink, WebsiteLink } from "../../assets/images";

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
          <div className="project-sources">
            <a href={projectTemplate.githubUrl}>
              <img className="git-image" src={GitHubLink} />
            </a>
            {projectTemplate.websiteUrl != undefined && (
              <>
                <a href={projectTemplate.websiteUrl}>
                  <img className="web-image" src={WebsiteLink} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
