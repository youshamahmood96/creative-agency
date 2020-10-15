import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [toggle,setToggle] = useState(false)
    var [user,setUser] = useState({})
    const handleChange =(e) => {
         const newUser = {...user}
         newUser[e.target.name] = e.target.value
         setUser(newUser)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('https://ancient-depths-25434.herokuapp.com/adminList',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        setToggle(true)
        user = {}
    }
    return (
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control onChange={handleChange} type="email" name="email" className="font-weight-light" placeholder="Enter email" />
        </Form.Group>
        {toggle?<p>Admin successfully added</p>:<button className="admin-btn" type="submit">
        Submit
      </button>}
      </Form>
        </div>
    );
};

export default MakeAdmin;