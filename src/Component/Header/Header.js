import React from 'react'
import { useHistory } from "react-router-dom";
import './Header.css'
import Typography from '@material-ui/core/Typography' 
const Header = () => {
    let history = useHistory();
    const abc=()=>{
       
    }
    return (
        <div className='header'>
            <div className = 'main'>
              <h1 className='top'>Welcome to my portfolio</h1>
            </div>
            <div className='para'>
                <p>
                  <h3><strong>🖐 Hey,</strong></h3>
                   <h3><strong>I'M Saurabh , a web developer.</strong></h3>
                    <strong> <Typography>A Web Developer from hills,with a flair for design, devoted to building quality websites that are easy to maintain and scalable.</Typography> </strong>
                </p>
                <button type="button" className="btn btn-outline-warning search" style={{'margin-bottom':'2vh'}} onClick={()=>{window.location.assign('https://www.instagram.com/saurabhranaaaa__/')}}>Know More</button>
            </div>
        </div>
    )
}

export default Header
