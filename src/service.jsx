import React from 'react';
import './service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobile, faCode,faPaintbrush,  } from '@fortawesome/free-solid-svg-icons';
import { faWordpress,faWebflow } from '@fortawesome/free-brands-svg-icons'; // ✅ Add this line


const service = [
  {
    title: "Web Design",
    content: "Creating visually appealing and user-friendly website layouts using tools like Figma, Adobe XD, and Sketch.",
    icon: <FontAwesomeIcon className='icon-property' icon={faLaptop} style={{ color: "#ffffff", height:"30px", width:"30px",}} />,
  },
  {
    title: "Frontend Development",
    content: "Building responsive and interactive websites using HTML, CSS, JavaScript, and frameworks like React and Angular.",
    icon:  <FontAwesomeIcon className='icon-property'  icon={faCode} style={{color: "#ffffff", height:"30px", width:"30px"}} />,
  },
  {
    title: "UI/UX Design",
    content: "Designing intuitive user interfaces and enhancing user experiences through wireframing, prototyping, and user research.",
    icon:    <FontAwesomeIcon className='icon-property' icon={faPaintbrush} style={{ color: "#ffffff", height:"30px", width:"30px" }} />,
  },
  {
    title: "Webflow Development",
    content: "Developing custom websites using Webflow's visual development platform, ensuring responsiveness and performance.",
    icon: <FontAwesomeIcon className='icon-property' icon={faWebflow} style={{ color: "#ffffff", height:"30px", width:"30px" }} />
,
  },
  {
    title: "WordPress Development",
    content: "Creating and customizing WordPress themes and plugins to build dynamic and scalable websites.",
    icon: <FontAwesomeIcon className='icon-property' icon={faWordpress} style={{color: "#ffffff", height:"30px", width:"30px",}} />,
  },
  {
     title: "Mobile App Design",
    content: "Creating and customizing WordPress themes and plugins to build dynamic and scalable websites.",
    icon: <FontAwesomeIcon className='icon-property' icon={faMobile} style={{color: "#ffffff",height:"30px", width:"30px",}} />,
  }
];
const portfoliocontent=[
   
  { number: '01', title: 'Moviltaxi App' },
  { number: '02', title: 'Propix Web' },
  { number: '03', title: 'Escot App' },
  { number: '04', title: 'Message Box' },
  { number: '05', title: 'Nèxer Web' },
  { number: '06', title: 'Bitcoin Dashboard' },
  { number: '07', 'title': 'Salud y ciencia' },
]
const Service = () => {
  return (
    <div className="service-section">
      <h1 className="service-heading">My Services</h1>
      <div className="servicecard">
        {service.map((service, index) => (
          <div className="card-service" key={index}>
            <div className="icon">
              {typeof service.icon === "string" ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
              ) : (
                service.icon
              )}
            </div>
            <div className="card-content">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-content">{service.content}</p>
            </div>
          </div>
        ))}

      </div>
      <div className="countsection">
        <h1 className="count-heading">Portfolio Content</h1>
<div className="count">
    {
        portfoliocontent.map((item,index)=>(
        <div className="count-card" key={index}>
        <h2 className="count-number">{item.number}</h2>
        <p className="count-title">{item.title}</p>
      </div>
        )
    )}
</div>
      </div>
    </div>
  );
};

export default Service;
