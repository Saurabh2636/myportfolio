import React from "react";
import "./Footer.css";
import { useHistory} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import insta from './image/instagram (1).png'
import github from './image/github.png'
import linkedin from './image/linkedin.png'
const Footer = () => {
  const history = useHistory()
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Body className='body'>
          <Card.Text style={{color: 'white'}}>
           
Copyright ©2021
          </Card.Text>
          <Button variant="primary" onClick={()=>{window.location.assign('https://www.instagram.com/saurabhranaaaa__/')}} ><img src = {insta} width={20}/></Button>
          <Button variant="primary" ><img src = {github} width={20} onClick={()=>{window.location.assign('https://github.com/Saurabh2636')}}/></Button>
          <Button variant="primary" ><img src = {linkedin} width={20} onClick={()=>{window.location.assign('https://www.linkedin.com/in/saurabh-rana-4432021b8/')}}/></Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default Footer;
