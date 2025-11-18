import React from 'react'
import './about.css'
import profileImg from './assets/profile.jpg';
const About = () => {
  return (
    <div>
      <div className="about-section">
        <div className="profile">
            <img
  src={profileImg}
  alt="profileImg"
  style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    backgroundColor: "#1a1d2b", // dark backdrop
  }}
 
/>
<h2 className='anas'>Muhammad Anas</h2>
        </div>
<div className="introduction">
    <div className="intro-content">
    <h1 className='hello' >HELLO WORLD!</h1>
    <p>I’m a Frontend and Webflow Developer dedicated to building responsive, high-performing websites for modern brands. With a solid foundation in UI/UX, I create clean, user-centered experiences that help businesses build a strong online presence.</p>
</div>
    <div className="about-buttons">

        <div className='keys'><p >keys rolls:</p></div>
        
              <button className='about-button '>Frontend developer </button>
              <button className='about-button '>UI/UX Designer</button>
              <button className='about-button '>Webflow </button>
              <button className='about-button'>Wordpress
                developer  </button>
            </div>
</div>
      </div>
    </div>
  )
}

export default About
