import React from 'react';
import './ServiceList.css';
const ServiceListCards = (props) => {
    let statusClass; 
    const {title,description,image,status} = props.service;
    switch (status) {
        case "Pending":
            statusClass = 'pending'
            break;
        case "Ongoing":
            statusClass = 'ongoing'
            break;
        case "Done":
            statusClass = 'done'
            break;
        default:
            statusClass = "pending";
    }

    return (
        <div className="list-body">
            <div className="list-cards">
            <div className="list-card-header">
            <img className="list-images" src={`data:image/png;base64,${image?.img}`} alt='service-images' />
            <button className={statusClass}>{status}</button>
            </div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceListCards;