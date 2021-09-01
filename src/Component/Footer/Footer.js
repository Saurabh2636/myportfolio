import React from "react";
import "./Footer.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import insta from './image/instagram (1).png'
import github from './image/github.png'
import linkedin from './image/linkedin.png'
const Footer = () => {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Body className='body'>
          <Card.Text style={{color: 'white'}}>
            With supporting text below as a natural lead-in to additional
          </Card.Text>
          <Button variant="primary" ><img src = {insta} width={20}/></Button>
          <Button variant="primary" ><img src = {github} width={20}/></Button>
          <Button variant="primary" ><img src = {linkedin} width={20}/></Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default Footer;
