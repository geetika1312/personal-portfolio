import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.webp';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/geetika-bajpai-863640249"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/geetika.bajpai.184"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/geetika1315?igshid=NGExMmI2YTkyZg=="><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/geetika1312"><img src={navIcon4} alt="" /></a>
                <a href="https://dev.to/geetika_bajpai_a654bfd1e0"><img src={navIcon5} alt="" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}