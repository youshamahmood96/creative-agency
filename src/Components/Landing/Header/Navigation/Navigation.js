import React, { useState } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
const Navigation = () => {
    const token = sessionStorage.getItem('token')
    let user;
    if(token){
        user = jwt_decode(token);
    }
    const logout = () => {
        sessionStorage.removeItem('token')
        window.location.reload();
    }
    const [isAdmin,setisAdmin] = useState(false)
    useEffect(()=>{
        fetch('https://ancient-depths-25434.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:user?.email})
        })
        .then(res=>res.json())
        .then(data=>setisAdmin(data));
    },[])
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
                <Nav.Link className="mr-5" >Our Portfolio</Nav.Link>
                <Nav.Link className="mr-5">Our Team</Nav.Link>
                <Nav.Link className="mr-5" >Contact Us</Nav.Link>
                {
                    isAdmin?(<Link to='/admin'><button className="mr-5 login-btn" >Admin</button></Link>)
                    :null
                }
                {
                    user?(<button onClick={logout} className="mr-5 login-btn" >Log Out</button>)
                    :(<Link to='/login'><button className="mr-5 login-btn" >Login</button></Link>)
                }

                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default Navigation;