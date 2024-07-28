import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavBarLinkTypes } from "../../enumerations/NavBar.enums";
import { NavBarLinkTemplate } from "../../models/NavBar.models";
import { MyResume, ResumeIcon } from "../../assets/images";
import { socialsTemplate } from "../../Data/DataTemplates";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(NavBarLinkTypes.Home);
  const [scrolled, setScrolled] = useState(false);

  const navBarLinkTemplate: NavBarLinkTemplate[] = [
    { label: "Home", href: "#home", type: NavBarLinkTypes.Home },
    { label: "Skills", href: "#skills", type: NavBarLinkTypes.Skills },
    { label: "Projects", href: "#projects", type: NavBarLinkTypes.Projects },
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
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (activeLinkType: NavBarLinkTypes) => {
    setActiveLink(activeLinkType);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
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
              {socialsTemplate.map((template) => {
                return (
                  <a href={template.href}>
                    <img src={template.src} alt="" />
                  </a>
                );
              })}
            </div>
            <a href={MyResume} download>
              <button
                className="lets-connect-button"
                onClick={() => console.log("lets connect")}
              >
                <div>Download Resume</div>
                <img src={ResumeIcon} alt="" />
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
