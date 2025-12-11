import React from 'react'
import './Tools.css'
import FigmaImg from './assets/Figma.png';
import figjamImg from './assets/figjam.png';
import adobeImg from './assets/adobeai.avif';
import adobepcImg from './assets/adobe pc.png';
import adobexdImg from './assets/adobe xd.png';
import framerImg from './assets/framer logo.png';
import canvaImg from './assets/canva logo.png';
import androidImg from './assets/android.svg';
import appleImg from './assets/apple.svg';
import htmlImg from './assets/html.svg';
import cssImg from './assets/css.svg';
import javaImg from './assets/java.svg';
import angularImg from './assets/angular.svg';
import reactImg from './assets/react.svg';
import primengImg from './assets/primeng.webp';
import primereactImg from './assets/primereact.png';
import tailwindImg from './assets/tailwind.svg';
import bootstrapImg from './assets/bootstrap.svg';
import MaterialUIImg from './assets/material.svg';
import jiraImg from './assets/jira.svg';
import notionImg from './assets/notion.svg';
import salackImg from './assets/slack.svg';
import optimalImg from './assets/optimalW.png';
import mazaImg from './assets/maza.svg';
import AnalyticsImg from './assets/analytics.png';
import chatgbtImg from './assets/chatgbt.png';
import loveableImg from './assets/lovable.png';
import replitImg from './assets/replit.png';
const Tools = () => {
    const Designtool=[
        {name:"figma",des:"UI/UX Design", img: FigmaImg},
        {name:"figjma",des:"desiging",img:figjamImg},
     {name:"Adobe AI",des:"Illustration",img:adobeImg},
     {name:"Adobe pc",des:"visual Design",img:adobepcImg},
     {name:"Adobe xd",des:"Illustration",img:adobexdImg},
     {name:"framer",des:"Interactive design",img:framerImg},
     {name:"Canva",des:"Quick design",img:canvaImg},
     ]
     const Mobiletool=[
             {name:"Material",des:"Android Guidline",img:androidImg},
     {name:"iOS(HIG)",des:"Apple Guidline",img:appleImg},

     ]
     const Developtool=[
             {name:"HTML",des:"Markup language",img:htmlImg},
     {name:"Css",des:"Styling",img:cssImg},
     {name:"Javascript",des:"Programing",img:javaImg},
     {name:"Angular",des:"Frame work",img:angularImg},
     {name:"React",des:"UI libries",img:reactImg},

     ]
const Developlabries=[
        {name:"Primeng",des:"UI labries",img:primengImg},
     {name:"Primereact",des:"UI labries",img:primereactImg},
     {name:"tailwind",des:"Css Framework",img:tailwindImg},
     {name:"Bootstrap",des:"Css Framework",img:bootstrapImg},
     {name:"MaterilaUI",des:"Css Framework",img:MaterialUIImg},


]
const Projectmanagement=[
         {name:"jira",des:"Sprint planning",img:jiraImg},
     {name:"Notion",des:"Task management",img:notionImg},
     {name:"Slack",des:"UI/UX Design",img:salackImg},

]
const Userresearch=[
         {name:"Optimal W.",des:"User research",img:optimalImg},
     {name:"Maza",des:"Usability testing",img:mazaImg},
     {name:"Analytics",des:"Metric reporting",img:AnalyticsImg},

]
const AItools=[
         {name:"chatgbt",des:"AI/platform",img:chatgbtImg},
     {name:"lovable",des:"AI/platform",img:loveableImg},
     {name:"Replit",des:"AI/platform",img:replitImg},

]
  return (
    <div>
      <div className="toolsection">
        <h1 className='stacks'>My Stacks & design strenghts</h1>
       
        <div className="desigingtools">
            <div className="webdesign">
            <h2 className='design'>Designing tool</h2>
            <div className="design-grid">
                {
                    Designtool.map((tool)=>(
           <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
            </div>
            </div>
            <div className="mobiledesign">
             <h2 className='design'>Mobile Design system</h2>
             <div className="design-grid">
                {
                    Mobiletool.map((tool)=>(
                         <div className="tool-card">
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
             </div>
        </div>
        </div>
                <div className="development">
        <div className="developmenttool">
            <h2 className='design'>Development tool</h2>
            
                <div className="design-grid">
                {
                    Developtool.map((tool)=>(
                         <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
             </div>

                   

        </div>

       <div className="developlibres">
        <h2 className='design'>Development Libraries & framework</h2>
         <div className="design-grid">
                {
                    Developlabries.map((tool)=>(
                         <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
             </div>
       </div>
       </div>
       <div className="development">
        <div className="Sprint-Project ">
            <h2 className='design'>Sprint & Project Management</h2>
            
                <div className="design-grid">
                {
                    Projectmanagement.map((tool)=>(
                         <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
             </div>

                   

        </div>

       <div className="user-research">
        <h2 className='design'>User Research</h2>
         <div className="design-grid">
                {
                    Userresearch.map((tool)=>(
                         <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))
                }
             </div>
       </div>
         <div className="AI-Tools">
        <h2 className='design'>Artifical Intelligence tool</h2>
         <div className="design-grid">
                {
                    AItools.map((tool)=>(
                         <div className="tool-card" key={tool.name}>
           
            <img className='design-image' src={tool.img} alt={tool.name} />
           
             <h3>{tool.name}</h3>
            <p>{tool.des}</p>
           
           </div>
                    ))}
             </div>
       </div>
       </div>
     </div>
    </div>
  
                )}
export default Tools

