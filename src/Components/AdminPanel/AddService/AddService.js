import React, { useState } from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import { Col, Form } from 'react-bootstrap';
import upload from '../../../images/icons/upload.png'
const AddService = () => {
    const [service,setService] = useState({})
    const [file,setFile] = useState(null);
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleBlur = (e) => {
        const newService = {...service}
        newService[e.target.name] = e.target.value
        setService(newService)
    }
    const submit = () =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', service.title)
        formData.append('description', service.description)

  fetch('http://localhost:5000/services', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
}
    return (
        <div className="event-container" >
        <Form className="event-form">
        <Form.Row>
          <Form.Group style={{marginRight: '50px'}} as={Col} >
            <Form.Label>Service Title</Form.Label>
            <Form.Control onBlur={handleBlur} type="text" name="title" placeholder="Enter title" />
          </Form.Group>
      
          <Form.Group as={Col} >
          <Form.Label>Icon</Form.Label><br></br>
            <Form.Control onChange={handleFileChange} type="file" name="icon"></Form.Control>
          
        </Form.Group>
        </Form.Row>
      
        
      
        <Form.Row>
          <Form.Group as={Col} style={{marginRight: '50px'}} >
          <Form.Label>Description</Form.Label>
          <Form.Control onBlur={handleBlur} name="description" placeholder="Enter description" as="textarea" rows={3}  />
          </Form.Group> 
      
          <Form.Group as={Col} >
            
            
          </Form.Group>
        </Form.Row>
      
      
        
      </Form>
      <button onClick={submit} className="add-event-btn">Submit</button>
        </div>
    );
};

export default AddService;