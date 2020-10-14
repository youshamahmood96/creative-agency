import React from 'react';
import './Admin.css';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/icons/plus.png';
import person from '../../../images/icons/personAdd.png';
import service from '../../../images/icons/service.png';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <div className="admin" >
        <div className="admin-header">
            <img className="logo" src={logo} alt="logo"/>
            <h4 style={{marginLeft:'165px'}}>Add Services</h4>
        </div>

            <div className="row">
            <div className="col-3 menu">
                <ul>
                <li> <img  className="mr-2" src={service} alt="service"/>Service List</li>
                <li><img className="mr-2" src={plus} alt="service"/>Add Service</li>
                <li><img className="mr-2" src={person} alt="service"/>MakeAdmin</li>
                </ul>
            </div>

            <div className="col-9">
                <AddService></AddService>
            </div>
            </div>
                        
        </div>
    );
};

export default Admin;