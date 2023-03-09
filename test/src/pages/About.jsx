import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        const msg = prompt();
        if (msg) {
            navigate("/");
        }
    }
  return (
    <>
    <Navbar/>
    <h1>About</h1>
    <button onClick={clickHandler}>Send Message</button>
    </>
  )
}

export default About