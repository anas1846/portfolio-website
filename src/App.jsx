// ...existing code...
import { useState } from 'react'
import './App.css'
import mainImg from './assets/main.png';
import About  from './about';
import Tools from './tools.jsx';
import Service from './service.jsx';
import Experience from './experience.jsx';
import Work  from './work.jsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='personal-portfolio'>
        <div className="home">
          <div className="home-content">
            
            <h4>2025</h4>
            <h1 className='Main-heading'>Portfolio</h1>
            <div className="buttons">
              <button className='home-button'>Frontend developer </button>
              <button className='home-button'>UI/UX Designer</button>
              <button className='home-button'>Webflow </button>
              <button className='home-button'>Wordpress
                developer  </button>
            </div>
          </div>

          <div className='homeimage'>
              <img src={mainImg} alt="Main Image" />
          </div>
        </div>

         <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-group">
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} /> Frontend </div>
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} />2025</div>
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} /> Anas</div>
        </div>

        {/* duplicate group for seamless infinite effect */}
        <div className="carousel-group" aria-hidden="true">
          <div className="card" ><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} />Frontend </div>
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} />2025</div>
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} />Anas</div>
          
        
        </div>
<div className="carousel-group" aria-hidden="true">
          <div className="card"> <FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" }} />Frontend</div>
          <div className="card"><FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "8px" ,marginRight:"8px"}} /> 2025</div>
          <div className="card"> <FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff", fontSize: "10px" }} /> Anas</div>
        </div>

      </div>
    </div>

<About/>
<Experience/>
<Tools/>
<Service/>
<Work/>
      </div>
    </>
  )
}

export default App

// ...existing code...