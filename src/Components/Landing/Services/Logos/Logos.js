import React from 'react';
import netflix from '../../../../images/logos/netflix.png';
import airbnb from '../../../../images/logos/airbnb.png';
import google from '../../../../images/logos/google.png';
import slack from '../../../../images/logos/slack.png';
import uber from '../../../../images/logos/uber.png';
import './Logos.css'
import { Col, Container, Row } from 'react-bootstrap';


const Logos = () => {
    return (
        <main>
            
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col className="logos"  xs={12} md={10}>
                    <img className="slack" src={slack} alt="netflix"></img>
                    <img className="google" src={google} alt="netflix"></img>
                    <img className="uber" src={uber} alt="netflix"></img>
                    <img className="netflix" src={netflix} alt="netflix"></img>
                    <img className="airbnb" src={airbnb} alt="netflix"></img>
                    </Col>
                    <Col xs={12} md={1} ></Col>
                </Row>
            </Container>
        </main>
    );
};

export default Logos;