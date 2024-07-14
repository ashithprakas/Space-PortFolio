import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavBarLinkTypes } from "../../enumerations/NavBar.enums";
import {
  NavBarLinkTemplate,
  NavBarSocialsTemplate,
} from "../../models/NavBar.models";
import {
  Logo,
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../assets/images";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(NavBarLinkTypes.Home);
  const [scrolled, setScrolled] = useState(false);

  const navBarLinkTemplate: NavBarLinkTemplate[] = [
    { label: "Home", href: "#home", type: NavBarLinkTypes.Home },
    { label: "Skills", href: "#skills", type: NavBarLinkTypes.Skills },
    { label: "Projects", href: "#projects", type: NavBarLinkTypes.Projects },
  ];

  const navBarSocialsTemplate: NavBarSocialsTemplate[] = [
    { src: LinkedInIcon, href: "" },
    { src: FaceBookIcon, href: "" },
    { src: InstagramIcon, href: "" },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      console.log("removeing scroll listeners");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (activeLinkType: NavBarLinkTypes) => {
    console.log("updating active link to ", activeLinkType);
    setActiveLink(activeLinkType);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navBarLinkTemplate.map((template) => {
              return (
                <Nav.Link
                  href={template.href}
                  className={
                    activeLink === template.type
                      ? "active-navbar-link navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink(template.type)}
                >
                  {template.label}
                </Nav.Link>
              );
            })}
          </Nav>
          <span className="navbar-social-icon-container">
            <div className="social-icon">
              {navBarSocialsTemplate.map((template) => {
                return (
                  <a href={template.href}>
                    <img src={template.src} alt="" />
                  </a>
                );
              })}
            </div>
            <button
              className="lets-connect-button"
              onClick={() => console.log("lets connect")}
            >
              Lets Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
