import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import emailIcon from "../assets/img/nav-icon3.svg";
import linkedInIcon from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <p className="footer-subtitle">Get in Touch</p>
        <h2 className="footer-title">Contact Me</h2>

        <div className="footer-contact-box d-flex justify-content-center flex-wrap align-items-center gap-4">

          <a href="mailto:geetikabajpai03@gmail.com" className="footer-contact-item d-flex align-items-center gap-2">
            <img src={emailIcon} alt="Email" className="icon" />
            <span>geetikabajpai03@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/geetika-bajpai-863640249"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item d-flex align-items-center gap-2">
            <img src={linkedInIcon} alt="LinkedIn" className="icon" />
            <span>LinkedIn</span>
          </a>

        </div>

        <p className="footer-copy">© 2023 Geetika Bajpai. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};
