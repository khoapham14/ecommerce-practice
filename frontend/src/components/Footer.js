import "./Footer.css";
import { Container, Navbar, Form, FormControl, Nav, Button, InputGroup, Row, Col } from 'react-bootstrap';

import FB_Icon from "../assets/facebook_white.png";
import Twitter_Icon from "../assets/twitter_white.png";
import Youtube_Icon from "../assets/youtube_white.png";
import Insta_Icon from "../assets/instagram_white.png";
import Arrow_Icon from "../assets/arrow.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="3" sm="6">
            <p className="footer-header">Get to know nothing</p>
            <p className="footer-item">About us</p>
            <p className="footer-item">Contact us</p>
            <p className="footer-item">Who created nothing?</p>
          </Col>
          <Col md="3" sm="6">
            <p className="footer-header">Careers</p>
            <p className="footer-item">Job vacancies</p>
            <p className="footer-item">Why work for nothing?</p>
          </Col>
          <Col md="3" sm="6">
            <p className="footer-header">Useless links</p>
            <p className="footer-item">Terms of Service</p>
            <p className="footer-item">Privacy Policy</p>
            <p className="footer-item">Refund Policy</p>
          </Col>
          <Col md="3" sm="6">
            <p className="footer-header">Connect with us</p>
            <p className="footer-item"> Subscribe to our newsletter </p>
            <InputGroup>
              <FormControl type="text" className="email-form" placeholder="Enter your email" />
              <InputGroup.Append>
                <Button variant="outline-light" className="form-button">
                  <img src={Arrow_Icon}
                    height="20px"
                    width="20px"
                  />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Row>
              <img src={FB_Icon} height="40px" width="40px" id="footer-media" alt="footer social medias" />
              <img src={Insta_Icon} height="40px" width="40px" id="footer-media" alt="footer social medias" />
              <img src={Youtube_Icon} height="40px" width="40px" id="footer-media" alt="footer social medias" />
              <img src={Twitter_Icon} height="40px" width="40px" id="footer-media" alt="footer social medias" />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;