import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './experience.css'
const Experience = () => {
  return (
    <div>
      <div className="experience">
        <div className="experience-1">
            <h2 className='experience-h2'>experience</h2>
            <div className="experience-list">
            <ul><li>
                </li>
                <h3>UI Designer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2024</p>
                </ul>
                <ul><li>
                </li>
                <h3>UI Designer-UX Engineer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2024-july</p>
                </ul>
                <ul><li>
                </li>
                <h3>webflow developer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2024</p>
                </ul>
                </div>
                    </div>
                 <div className="experience-1">
            <h2 className='experience-h2'>experience</h2>
            <div className="experience-list">
            <ul><li>
                </li>
                <h3>Frontend-developer</h3>
                <p>lahore,pakistans</p>
                <p className='date'>2025-present</p>
                </ul>
                <ul><li>
                </li>
                <h3>React-developer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2025-present</p>
                </ul>
                <ul><li>
                </li>
                <h3>UX Engineer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2025-Oct</p>
                </ul>
                </div>
                    </div>    
                     <div className="experience-1">
            <h2 className='experience-h2'>experience</h2>
            <div className="experience-list">
            <ul><li>
                </li>
                <h3>Shopify-Developer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2025-feb</p>
                </ul>
                <ul><li>
                </li>
                <h3>Wordpress-developer</h3>
                <p>lahore,pakistan</p>
                <p className='date'>2025-present</p>
                </ul>
                <ul><li>
                </li>
                <h3>UI Designer-UX Engineer</h3>
                <p>lahore,pakistans
                   
                </p>
                <p className='date'>2025-present</p>
                </ul>
                </div>
                    </div>
                     <div className="experience-2">
            <h2 className='experience-h2'>Contact</h2>
            <div className="experience-list-2">
            <div className="behance">
<FontAwesomeIcon icon={faSquareBehance} style={{color: "white",width:"50px",height:"50px"}                } />
           <a 
  href="https://www.behance.net/anas1846" 
  target="_blank" 
  rel="noopener noreferrer"
>behance.net/anas1846</a>
            </div>
            <div className="linkdin">
              <FontAwesomeIcon 
                icon={faLinkedin} 
                style={{
                  color: "  #0A66C2 ",
                  width: "50px",
                  height: "50px"
                }} 
              />
              <a href="https://www.linkedin.com/in/muhammad-anas-69a97131b/">.linkedin.com/in/anas18</a>
            </div>
             <div className="gmail">
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#f0000c",height:"50px",width:"48px"}} />
              <a href="muhammadanas1846@gmail.com">muhammadanas1846@</a>
            </div>
            <div className="language">
           <h3 className='language-h2'>Languages</h3>
           <p>English <br />urdu</p>
           </div>
                </div>
                    </div>
      </div>
     
    </div>
  )
}

export default Experience
