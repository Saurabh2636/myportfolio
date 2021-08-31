import React from "react";
import "./Footer.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Footer = () => {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Body className='body'>
          <Card.Text style={{color: 'white'}}>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
