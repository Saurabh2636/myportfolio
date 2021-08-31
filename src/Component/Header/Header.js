import React from 'react'
import { useHistory } from "react-router-dom";
import './Header.css'
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
                lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem * 12
                lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem * 1
                lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem * 12
                lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem *
                </p>
                <button type="button" className="btn btn-outline-warning search" style={{'margin-bottom':'2vh'}} onClick={()=>{abc()}}>Know More</button>
            </div>
        </div>
    )
}

export default Header
