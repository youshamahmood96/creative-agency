import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackCards from './FeedbackCards';
import customer1 from '../../../images/customer1.png'
import customer2 from '../../../images/customer2.png'
import customer3 from '../../../images/customer3.png'
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
    const reviews = totalReviews.slice(0,3)
    let customers  = [customer1, customer2, customer3]
    for(let i=0;i<reviews.length;i++){
       reviews[i].image = customers[i]
    }
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