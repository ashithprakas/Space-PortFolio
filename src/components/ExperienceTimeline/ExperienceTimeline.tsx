import { Container } from "react-bootstrap";
import Timeline from "./Timeline";
import { TimeLineTemplate } from "../../enumerations/ExperienceTimeline.enum";
import { GradientBackground2 } from "../../assets/images";

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

const timeLineTemplate: TimeLineTemplate[] = [
  {
    Title: "Started Learning Programming",
    Description:
      "Began learning programming languages such as Python and JavaScript through online courses and personal projects. Developed a strong foundation in algorithms and data structures.",
    Date: "2018-01-15",
  },
  {
    Title: "First Software Development Internship",
    Description:
      "Secured a position as a software development intern at XYZ Tech, where I gained practical experience in web development technologies such as HTML, CSS, and JavaScript. Collaborated with senior developers on projects, improving my skills in version control and agile methodologies.",
    Date: "2019-06-01",
  },
  {
    Title: "Graduated from University",
    Description:
      "Completed Bachelor's degree in Computer Science with a focus on software engineering. Developed a final year project on machine learning algorithms for pattern recognition, receiving accolades for innovative research and project implementation.",
    Date: "2020-05-30",
  },
];
