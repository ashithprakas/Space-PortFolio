import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Slider from "./Slider";
import { GradientBackground1 } from "../../assets/images";
import { useEffect, useRef, useState } from "react";

const SkillsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const skillsTemplateArray = [
    { skillName: "Web Developer", percentage: 70 },
    { skillName: "Angular", percentage: 80 },
    { skillName: "React", percentage: 90 },
    { skillName: "html", percentage: 75 },
    { skillName: "css", percentage: 79 },
    { skillName: "typescript", percentage: 75 },
    { skillName: "javascirpt", percentage: 85 },
  ];

  // Split skillsTemplateArray into rows of 3 items each
  const skillsTemplate = skillsTemplateArray.reduce(() => {
    return Array.from(
      { length: Math.ceil(skillsTemplateArray.length / 4) },
      (_, index) => skillsTemplateArray.slice(index * 4, index * 4 + 4)
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(
              parseInt(entry.target.getAttribute("data-index") as string)
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach((item, index) => {
      observer.observe(item);
      item.setAttribute("data-index", index.toString());
    });

    return () => {
      carouselItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="skill-container">
      <Container className="skill-box">
        <Row>
          <Col>
            <div>
              <h2>Skills</h2>
            </div>
            <Carousel ref={carouselRef} fade>
              {skillsTemplate.map((row, index) => (
                <Carousel.Item
                  interval={81000000}
                  className={index === activeIndex ? "active" : ""}
                >
                  <Container>
                    <Row className="skill-sliders-container">
                      {row.map((col) => (
                        <Col xs={15} md={6} xl={3} className="Skill-meter">
                          {index === activeIndex && (
                            <>
                              <Slider percentage={col.percentage} />
                              <h5>{col.skillName}</h5>
                            </>
                          )}
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img src={GradientBackground1} alt="" className="background-image-left" />
    </section>
  );
};

export default SkillsSlider;
