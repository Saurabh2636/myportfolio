import React,{useState} from "react";
import "./Contact.css";
import Container from "@material-ui/core/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const Contact = () => {
  const [user, setUser] = useState({
    name:'',
    email:'',
    message:''
  })
  let name , value;
  const getUserData = (event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value})
  }
  const postData = async(e)=>{
     e.preventDefault();
     const{name,email,message}=user
     const data = await fetch('https://portfolio1-5d946-default-rtdb.firebaseio.com/portfolio.json',{
       method:'POST',
       headers:{
         "Content-Type":"application/json",
       },
       body:JSON.stringify({
         name,
         email,
         message,
       })
  
     });
    if(data){
      setUser({
        name:'',
        email:'',
        message:''
      })
      alert('Data Stored')
    }
  }
  return (
    <div className="contact">
      <div className="heading">
        <h1>Contact Me</h1>
      </div>
      <Container >
        <div className="inner-container">
          <Form method="POST">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name' value={user.name} onChange = {getUserData}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder=" Enter Email" name='email' value={user.email} onChange = {getUserData}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" placeholder=" Enter Message"   name="message" value={user.message} onChange = {getUserData} style={{ height: '100px' }}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={postData}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
