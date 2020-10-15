import React, { useState } from 'react';
import './User.css';
import logo from '../../../images/logos/logo.png';
import cart from '../../../images/icons/cart.png';
import review from '../../../images/icons/review.png';
import service from '../../../images/icons/service.png';
import Order from '../Order/Order';
import { Link } from 'react-router-dom';
import ServiceList from '../ServiceList/ServiceList'
import ReviewList from '../Review/Review';
import cartG from '../../../images/icons/cartG.png';
import reviewG from '../../../images/icons/reviewG.png';
import serviceG from '../../../images/icons/serviceG.png';
import jwt_decode from "jwt-decode";

const User = () => {
    const token = sessionStorage.getItem('token')
    const user = jwt_decode(token);
    const [order,setOrder] = useState(true)
    const [services,setService] = useState(false)
    const [reviews,setReview] = useState(false)
    return (
        <div className="user" >

        <div className="user-header">
            <Link to='/'><img className="logo" src={logo} alt="logo"/></Link>
            <div className="ml-auto d-flex user-info">
            <h5 >{user.name}</h5>
            </div>
        </div>

            <div className="row">
            <div className="col-3 menu">
                <ul>
                <li onClick={()=>{setOrder(true);setService(false);setReview(false)}}
                className={order?"active":""}
                > <img  className="mr-2" src={order?cartG:cart} alt="cart"/>Order</li>
                <li onClick={()=>{setOrder(false);setService(true);setReview(false)}}
                className={services?"active":""}
                ><img className="mr-2" src={services?serviceG:service} alt="service"/>Service List</li>
                <li onClick={()=>{setOrder(false);setService(false);setReview(true)}}
                className={reviews?"active":""}
                ><img className="mr-2" src={reviews?reviewG:review} alt="review"/>Review</li>
                </ul>
            </div>

            <div className="col-9">
                {
                    order?(<Order></Order>)
                    :services?(<ServiceList></ServiceList>)
                    :(<ReviewList></ReviewList>)
                }
            </div>
            </div>    
        </div>
    );
};

export default User;