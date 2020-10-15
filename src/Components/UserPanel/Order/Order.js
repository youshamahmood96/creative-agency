import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Database from '../../Database/Database';
import './Order.css'
const Order = () => {
    const token = sessionStorage.getItem('token')
    const user = jwt_decode(token);
    const status = 'Pending'
    const [toggle,setToggle] = useState(false)
    const [file,setFile] = useState(null);
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const [service,setService] = useState({})
    const {id} = useParams()
    const services = Database()
    const selectedService = services.filter(srv=>srv._id===id)
    const {title,description,image} = selectedService.length && selectedService[0];
    const handleChange =(e) => {
        const newInfo = { ...service }
        newInfo[e.target.name] = e.target.value
        setService(newInfo)
    }
    const email = user.email
    var serviceSummary = {...service,title,description,image,email,status}
    console.log(serviceSummary);
    const submit =(e)=>{
        e.preventDefault()
        fetch('https://ancient-depths-25434.herokuapp.com/addServices',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(serviceSummary)
        })
        setToggle(true)
        serviceSummary = {}
    }
    return (
        <div className="order" >
        <Form onSubmit={submit} className="w-50">
        <Form.Group controlId="ControlInput1">
          <Form.Control required onChange={handleChange} className="font-weight-light" type="text" name="name" placeholder="Your Name/Company's Name" />
        </Form.Group>
        <Form.Group controlId="ControlInput2">
          <Form.Control required className="font-weight-light" type="email" name="email" readOnly value={user.email} />
        </Form.Group>
        <Form.Group controlId="ControlInput3">
          <Form.Control required className="font-weight-light" type="text" name="title" readOnly value={title}/>
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Control required className="font-weight-light" as="textarea" name="description" readOnly  value={description} placeholder="" rows={3} />
        </Form.Group>
        <Form.Group controlId="ControlInput4">
          <Form.Control required onChange={handleChange} className="font-weight-light" type="text" name="price" placeholder="price" />
        </Form.Group>
        <Form.Group controlId="ControlInput4">
        <Form.Control onChange={handleFileChange} type="file" name="icon"></Form.Control>
        </Form.Group>
        {
          toggle?
          (<p>Order placed !</p>)
          :
          (<button type="submit" className="order-btn">Submit</button>)
        }
      </Form>
      
        </div>
    );
};

export default Order;