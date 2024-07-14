import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
} from "../../assets/images";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} className="content-center">
            <img src={Logo} alt="" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
