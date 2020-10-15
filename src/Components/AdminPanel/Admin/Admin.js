import React, { useEffect, useState } from 'react';
import './Admin.css';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/icons/plus.png';
import person from '../../../images/icons/personAdd.png';
import service from '../../../images/icons/service.png';
import AddService from '../AddService/AddService';
import ServiceList from '../AdminServiceList/AdminServiceList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import plusG from '../../../images/icons/plusG.png';
import personG from '../../../images/icons/personAddG.png';
import serviceG from '../../../images/icons/serviceG.png';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const Admin = () => {
    const token = sessionStorage.getItem('token')
    let user;
    if(token){
        user = jwt_decode(token);
    }
    const [isAdmin,setisAdmin] = useState(false)
    const [admin,setAdmin] = useState(true)
    const [services,setService] = useState(false)
    const [add,setAdd] = useState(false)
    useEffect(()=>{
        fetch('https://ancient-depths-25434.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>setisAdmin(data));
    },[])
    console.log(isAdmin);
    return (
        <div className="admin" >
            <div className="admin-header">
                <Link to='/'><img className="logo" src={logo} alt="logo"/></Link>
                <h4 style={{marginLeft:'165px'}}>
                {
                    services? "Service List"
                    :add? "Add Service"
                    : "Make Admin"
                }
                </h4>
            </div>
    
                <div className="row">
                <div className="col-3 menu">
                    <ul>
                    <li onClick={()=>{setService(true);setAdmin(false);setAdd(false)}}
                    className={services?"active" : ""}
                     > <img  className="mr-2" src={services?serviceG:service} alt="service"/>Service List</li>
                    <li onClick={()=>{setService(false);setAdmin(false);setAdd(true)}}
                    className={add?"active" : ""}
                    ><img className="mr-2" src={add?plusG:plus} alt="service"/>Add Service</li>
                    <li onClick={()=>{setService(false);setAdmin(true);setAdd(false)}}
                    className={admin?"active" : ""}
                    ><img className="mr-2" src={admin?personG:person} alt="service"/>MakeAdmin</li>
                    </ul>
                </div>
           
                <div className="col-9">
                    {
                        services?(<ServiceList></ServiceList>)
                        :add?(<AddService></AddService>)
                        :(<MakeAdmin></MakeAdmin>)
                    }
                </div>
                </div>
                            
            </div>
           
        
    );
};

export default Admin;