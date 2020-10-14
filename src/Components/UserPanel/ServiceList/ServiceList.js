import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceListCards from './ServiceListCards';

const ServiceList = () => {
    const[services,setServices] = useState([])
    const [user, setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
    fetch('http://localhost:5000/totalServices?email='+user.email)
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