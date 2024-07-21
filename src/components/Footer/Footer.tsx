import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaceBookIcon,
  FooterBackground,
  InstagramIcon,
  LinkedInIcon,
} from "../../assets/images";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="get-in-touch">Get In Touch</Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="footer-info-container">
              <div className="footer-headings ">Email</div>
              <div className="footer-content">ashith.prakas@gmail.com</div>
              <div className="footer-content">+91 8129088867</div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="footer-info-container">
              <div className="footer-headings ">Social</div>
              <div className="social-icon d-flex align-items-center justify-content-center">
                <a href="">
                  <img src={LinkedInIcon} alt="" />
                </a>
                <a href="">
                  <img src={FaceBookIcon} alt="" />
                </a>
                <a href="">
                  <img src={InstagramIcon} alt="" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={FooterBackground} className="footer-image-background" />
    </footer>
  );
};

export default Footer;

{
  /* <Container>
        <Row>
          <Col sm={6} className="content-center">
            <img src={Logo} alt="" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            
          </Col>
        </Row>
      </Container> */
}
