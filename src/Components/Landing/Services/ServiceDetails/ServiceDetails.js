import React from 'react';
import Database from '../../../Database/Database';
import ServiceCards from './ServiceCards';
import './ServiceDetails.css';
import { Lines } from 'react-preloaders';
const ServiceDetails = () => {
    const services = Database()
    return (
        <div className="text-center service-details" >
        <h1>Provide awesome <span style={{color: '#7AB259'}}>services</span> </h1>
        <div className="services-provided">
        {
            services.length?(services.map(service =><ServiceCards key={service._id} service={service}></ServiceCards>))
            :(<Lines />)
        }
        </div>
            
        </div>
    );
};

export default ServiceDetails;