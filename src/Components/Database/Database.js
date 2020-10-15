import { useEffect, useState } from 'react';

const Database = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('https://ancient-depths-25434.herokuapp.com/allServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services

};

export default Database;
