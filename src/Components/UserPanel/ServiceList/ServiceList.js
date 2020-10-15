import React, { useEffect, useState } from 'react';
import ServiceListCards from './ServiceListCards';
import jwt_decode from "jwt-decode";
import { Lines } from 'react-preloaders';
const ServiceList = () => {
    const token = sessionStorage.getItem('token')
    const user = jwt_decode(token);
    const[services,setServices] = useState([])
    useEffect(()=>{
    fetch('https://ancient-depths-25434.herokuapp.com/totalServices?email='+user.email)
    .then(res=>res.json())
    .then(data=>setServices(data))
})
    return (
        <div>
            {services.length !== 0?
                services.map(service=><ServiceListCards service={service} ></ServiceListCards>)
                :(<Lines />)
            }
        </div>
    );
};

export default ServiceList;