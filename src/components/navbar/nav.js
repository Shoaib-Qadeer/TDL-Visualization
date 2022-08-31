
import React, { Component } from 'react'

import './nav.css';
import Nav from 'react-bootstrap/Nav';


export default function nav(props){

    return (
        <div className='navbar'>
            <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/contact">
         Contact Us
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
    )


}