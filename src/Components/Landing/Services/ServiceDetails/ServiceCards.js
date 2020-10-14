import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css'
const ServiceCards = (props) => {
    const {title,description,image,_id} = props.service
    console.log(title,description,image);
    return (
        <Link to={`/userPanel/${_id}`}>
        <div className="service-body">
          <div className="service-cards">
          <img className="service-images" src={`data:image/png;base64,${image.img}`} alt='service-images' />
            <h4 className="service-title">{title}</h4>
            <p className="service-description">{description}</p>
          </div>
        </div>
        </Link>
    );
};

export default ServiceCards;