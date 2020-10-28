import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackCards from './FeedbackCards';
import './Feedback.css'
const Feedback = () => {
    const [totalReviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://ancient-depths-25434.herokuapp.com/allReviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    const shuffled = shuffle(totalReviews)
    const reviews = shuffled.slice(0,3)
    
    return (
        <div>
           <h3 style={{textAlign: 'center',margin:'100px 0px'}}> <span  style={{color:'#171B4E',fontWeight:'bold'}}>Clients </span> <span style={{color:'#7AB259'}}> Feedback </span> </h3>
           <div className="review-holder">
           {
            reviews.map(rv=><FeedbackCards key={rv._id} rv={rv} ></FeedbackCards>)
           }
           </div>
        </div>
    );
};

export default Feedback;