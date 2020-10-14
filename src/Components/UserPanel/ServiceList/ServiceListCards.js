import React from 'react';
import './ServiceList.css';
const ServiceListCards = (props) => {
    const {title,description,image} = props.service
    return (
        <div className="list-body">
            <div className="list-cards">
            <img className="list-images" src={`data:image/png;base64,${image?.img}`} alt='service-images' />
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceListCards;