import { useEffect, useState } from 'react';

export const AdminData = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('https://ancient-depths-25434.herokuapp.com/adminServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services
};
