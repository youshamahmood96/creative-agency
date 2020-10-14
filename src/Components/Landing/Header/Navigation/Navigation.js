import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="pt-4" >
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
            <img className="logo ml-5" src={logo} alt='Logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="mr-5 font-weight-bold" href="#home">Home</Nav.Link>
                <Nav.Link className="mr-5" href="#link">Our Portfolio</Nav.Link>
                <Nav.Link className="mr-5" href="#link">Our Team</Nav.Link>
                <Nav.Link className="mr-5" href="#link">Contact Us</Nav.Link>
                <Link to='/login'><button className="mr-5 login-btn" >Login</button></Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default Navigation;