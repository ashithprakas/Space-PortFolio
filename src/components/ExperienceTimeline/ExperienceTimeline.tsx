import { Container } from "react-bootstrap";
import Timeline from "./Timeline";
import { GradientBackground2 } from "../../assets/images";
import "./ExperienceTimeline.css";
import { timeLineTemplate } from "../../Data/DataTemplates";

const ExperienceTimeline = () => {
  return (
    <section className="experience-timeline-container">
      <Container>
        <h1 className="experience-header">Experience</h1>
        <Timeline timeLineTemplate={timeLineTemplate} />
      </Container>
      <img
        src={GradientBackground2}
        alt="background"
        className="background-image-right"
      />
    </section>
  );
};

export default ExperienceTimeline;
