import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import './review.css';
import jwt_decode from "jwt-decode";
const Review = () => {
    const token = sessionStorage.getItem('token')
    let user;
    if(token){
        user = jwt_decode(token);
    }
    const [toggle,setToggle] = useState(false)
    const [review,setReview] = useState({})
    const handleChange =(e) => {
        const newInfo = { ...review }
        newInfo[e.target.name] = e.target.value
        newInfo.image = user.picture
        setReview(newInfo)
    }
    console.log(review);
    const submit =(e)=>{
        e.preventDefault();
        fetch('https://ancient-depths-25434.herokuapp.com/reviews',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(review)
        })
       setToggle(true)
    }
    return (
        <div>
            <Form onSubmit={submit} className="w-50">
            <Form.Group controlId="ControlInput1">
            <Form.Control required onChange={handleChange} className="font-weight-light" type="text" name="name" placeholder="Your Name/Company's Name" />
            </Form.Group>
            <Form.Group controlId="ControlInput3">
            <Form.Control required onChange={handleChange} className="font-weight-light" type="text" name="company" placeholder="Company's Name,Designation" />
            </Form.Group>
            <Form.Group controlId="ControlTextarea1">
            <Form.Control required onChange={handleChange} className="font-weight-light" as="textarea" name="description"  placeholder="Description" rows={3} />
            </Form.Group>
           {
               toggle?
               (<p>Review Submitted!</p>)
               :
               ( <button className="review-btn" type="submit">
               Submit
               </button>)
           }
            </Form>
            
        </div>
    );
};

export default Review;