import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FooterBackground } from "../../assets/images";
import { personalInfo, socialsTemplate } from "../../Data/DataTemplates";

const Footer = () => {
  return (
    <section>
      <footer>
        <Container>
          <Row>
            <Col className="get-in-touch">Get In Touch</Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="footer-info-container">
                <div className="footer-headings ">Email</div>
                <div className="footer-content">{personalInfo.email}</div>
                <div className="footer-content">{personalInfo.Phone}</div>
              </div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div className="footer-info-container">
                <div className="footer-headings ">Social</div>
                <div className="social-icon d-flex align-items-center justify-content-center">
                  {socialsTemplate.map((template) => {
                    return (
                      <a href={template.href}>
                        <img src={template.src} alt="" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={FooterBackground} className="footer-image-background" />
      </footer>
    </section>
  );
};

export default Footer;
