import React from 'react';
import './ServiceList.css';
const ServiceListCards = (props) => {
    const {title,description,image,status} = props.service
    return (
        <div className="list-body">
            <div className="list-cards">
            <div className="list-card-header">
            <img className="list-images" src={`data:image/png;base64,${image?.img}`} alt='service-images' />
            <button>{status}</button>
            </div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceListCards;