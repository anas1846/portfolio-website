import React from 'react'
import './work.css';
import firsyproject from './assets/firstproject.png';
import todolist from './assets/todolistapp.png';
import stonepapar from './assets/stone.png';
const Work = () => {
    const portfolioItems = [
        {
id:1,
title:<a href='https://anas1846.github.io/Wetherapp/'>wether App</a>,
image:firsyproject,
description:"Weather App is my first personal project designed to deliver real-time weather information in a simple and modern interface.It allows users to search for any city and instantly view current temperature, humidity, wind speed, and weather conditions.",
button1:"html",
button2:"Css",
button3:"UI/UX",
button4:"Javascript",


        },
        {
            id:2,
            title:"todo list app",
            image:todolist,
            description:"A clean and minimal To-Do app that helps you organize your day efficiently. Add, edit, and complete tasks in seconds with a modern interface built for simplicity and speed.",
button1:"html",
button2:"Css",
button3:"UI/UX",
button4:"Javascript",

            
        },
        {
            id:3,
            title:"stone papar",
            image:stonepapar,
            
            description:"This is a simple Stone-Paper-Scissors game where you play against the computer. Choose Stone, Paper, or Scissors, and see who wins based on the classic rules. The game keeps track of wins, losses, and ties for a fun and interactive experience.",
button1:"html",
button2:"Css",
button3:"UI/UX",
button4:"Javascript",

        }


    ]
          

  return (
    <div>
      <div className="work-section">
        <h1 className='work-heading' >
        Let's have a look at  my Portfolio
        </h1>
        <div className="work-grid">
            {
                portfolioItems.map((item)=>(
              <div className="work-card" key={item.id}>
                <div className="card-image">
                <img src={item.image} alt={item.title} className='work-image' /></div>
                <div className="work-content">
                <h2 className='work-title'>{item.title}</h2>
                <p className='work-description'>{item.description}</p>
                 <div className="work-buttons">
                    <button className='work1'>{item.button1}</button>
                    <button className='work1' >{item.button2}</button>
                    <button className='work1' >{item.button3}</button>
                    <button className='work1' >{item.button4}</button>
                </div>
                </div>
               
              </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Work
