import React from 'react';
import './Feedback.css'
const FeedbackCards = (props) => {
    const {name,company,description,image} = props.rv
    console.log(name,company,description);
    return (
        <div className="feedback-body">
          <div className="feedback-cards">
          
            <div className="feedback-header">
           
            <img src={image} alt="customer"/>
        
            <div className="feedback-name">
            <h5 className="feedback-title">{name}</h5>
            <h6>{company}</h6>
            </div>
            </div>
            <p className="feedback-description">{description}</p>
          </div>
        </div>
    );
};

export default FeedbackCards;