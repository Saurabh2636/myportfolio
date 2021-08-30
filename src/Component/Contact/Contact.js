import React from "react";
import "./Contact.css";
import Container from "@material-ui/core/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h1>Contact Me</h1>
      </div>
      <Container className="card">
        <div className="inner-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder=" Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" placeholder=" Enter Message"      style={{ height: '100px' }}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
