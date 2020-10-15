import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
    return (
        <footer>
        <Container>
            <Row>
                <Col md={6} xs={12}>
                  <h2>Let Us Handle your <br/> project,professionally </h2>
                  <p>With well written codes, we build apps for all <br/> platforms, mobile and web apps in general</p>
                </Col>
                <Col md={6} xs={12}>
                <Form>
                <Form.Group controlId="ControlInput1">
                <Form.Control  className="font-weight-light" type="email" placeholder="Your Email address" />
                </Form.Group>
                <Form.Group controlId="ControlInput2">
                <Form.Control  className="font-weight-light" type="text" placeholder="Your Name/Company's Name"  />
                </Form.Group>
                <Form.Group controlId="ControlTextarea1">
                <Form.Control className="font-weight-light" as="textarea" name="description"  placeholder="Your Message"rows={6} />
                </Form.Group>
            
            
                <button type="submit" className="footer-btn">Send</button>

            </Form>
      
                </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default Footer;