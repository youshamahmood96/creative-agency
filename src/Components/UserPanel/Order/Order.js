import React, { useState } from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

import Database from '../../Database/Database';
import './Order.css'
const Order = () => {
    const [file,setFile] = useState(null);
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const [user, setLoggedInUser] = useContext(UserContext)
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
    const email = user?.email
    const serviceSummary = {...service,title,description,image,email}
    const submit =()=>{
        fetch('http://localhost:5000/addServices',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(serviceSummary)
        })
    }
    return (
        <div className="order" >
        <Form className="w-50">
        <Form.Group controlId="ControlInput1">
          <Form.Control onChange={handleChange} className="font-weight-light" type="text" name="name" placeholder="Your Name/Company's Name" />
        </Form.Group>
        <Form.Group controlId="ControlInput2">
          <Form.Control className="font-weight-light" type="email" name="email" value={user.email} />
        </Form.Group>
        <Form.Group controlId="ControlInput3">
          <Form.Control className="font-weight-light" type="text" name="title" value={title}/>
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Control className="font-weight-light" as="textarea" name="description" value={description} placeholder=""rows={3} />
        </Form.Group>
        <Form.Group controlId="ControlInput4">
          <Form.Control onChange={handleChange} className="font-weight-light" type="text" name="price" placeholder="price" />
        </Form.Group>
        <Form.Group controlId="ControlInput4">
        <Form.Control onChange={handleFileChange} type="file" name="icon"></Form.Control>
        </Form.Group>
      </Form>
      <button onClick={submit} >Submit</button>
        </div>
    );
};

export default Order;