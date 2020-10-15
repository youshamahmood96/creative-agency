import React, { useEffect, useState } from 'react';
import ServiceListCards from './ServiceListCards';
import jwt_decode from "jwt-decode";
const ServiceList = () => {
    const token = sessionStorage.getItem('token')
    const user = jwt_decode(token);
    const[services,setServices] = useState([])
    useEffect(()=>{
    fetch('https://ancient-depths-25434.herokuapp.com/totalServices?email='+user.email)
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
console.log(services);
    return (
        <div>
            {
                services.map(service=><ServiceListCards service={service} ></ServiceListCards>)
            }
        </div>
    );
};

export default ServiceList;