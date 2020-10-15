import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { AdminData } from './AdminData';

const RenderServices = (props) => {
    const {_id,name,email,title,description,image,status} = props.srv
    const [value,setValue]=useState();
    const handleSelect=(e)=>{
        setValue(e)
        const status = e
        const updatedService = {name,email,title,description,status,image}
        console.log(updatedService);
        fetch(`https://ancient-depths-25434.herokuapp.com/update/${_id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('updated');
        })
    }
    
    return (
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
        <DropdownButton
        alignRight
        title={value?`${value}`:status}
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
              <Dropdown.Item eventKey="Ongoing">OnGoing</Dropdown.Item>
              <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
      </DropdownButton>
        </td>
        </tr>
    );
};

export default RenderServices;