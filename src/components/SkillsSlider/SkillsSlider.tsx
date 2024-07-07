import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { SkillsSliderTemplate } from "../../models/SkillsSlider.models";
import Slider from "./Slider";
import { GradientBackground1 } from "../../assets/images";

const SkillsSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const skillsTemplateArray: SkillsSliderTemplate[] = [
    { skillName: "Web Developer", percentage: 70 },
    { skillName: "Angular", percentage: 80 },
    { skillName: "React", percentage: 90 },
    { skillName: "html", percentage: 75 },
  ];

  const skillsTemplate = skillsTemplateArray.reduce(() => {
    return Array.from(
      { length: Math.ceil(skillsTemplateArray.length / 3) },
      (_, index) => skillsTemplateArray.slice(index * 3, index * 3 + 3)
    );
  }, []);
  console.log(skillsTemplate);
  return (
    <section className="skill-container">
      <Container className="skill-box">
        <Row>
          <Col>
            <div>
              <h2>Skills</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                obcaecati nihil minima eaque dignissimos, asperiores in est
                voluptates quidem dolorem, rem, blanditiis corporis adipisci
                incidunt? Reprehenderit ex voluptates ipsam similique.
              </p>
            </div>
            <Carousel className="skill-slider">
              {skillsTemplate.map((row) => {
                return (
                  <Carousel.Item interval={10000}>
                    <div className="slider-item">
                      {row.map((col) => {
                        return (
                          <div className="skill-item">
                            <Slider percentage={col.percentage} />
                            <h5>{col.skillName}</h5>
                          </div>
                        );
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img src={GradientBackground1} alt="" className="background-image-left" />
    </section>
  );
};

export default SkillsSlider;
