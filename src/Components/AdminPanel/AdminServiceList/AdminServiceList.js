import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import RenderServices from './RenderServices';
import './AdminServiceList.css'
import { AdminData } from './AdminData';
const ServiceList = () => {
    const services = AdminData()
    return (
        <div>
        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
              services.map(srv=><RenderServices key={srv._id} srv={srv}></RenderServices>)
          }
        </tbody>
      </Table>
        </div>
    );
};

export default ServiceList;