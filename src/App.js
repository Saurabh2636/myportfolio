import React from 'react'
import './App.css'
import Aboutus from './Component/Aboutus/Aboutus'
import Contact from './Component/Contact/Contact'
import Nav from './Component/Navbar/Nav'
import Header from './Component/Header/Header'
import Project from './Component/Project/Project'
import Skill from './Component/Skill/Skill'
import Email from './Component/Email/Email'
import Footer from './Component/Footer/Footer'
const App = () => {
  return (
    <div className = 'app'>
       <Nav/>
       <div className = 'sections'>
          <Header/>
          <Project/>
          <Skill/>
          <Aboutus/>
          <Contact/>
          <Email/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
