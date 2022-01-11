import React from 'react';
import budgetTracker from '../assets/BudgetTracker.png';
import ecommerce from '../assets/EcommerceVideoDemo.png';
import fitness from '../assets/Fitness_Live.png';
import workday from '../assets/WorkDayLive.png';
// import Form from './Form';
import Project from '../Project';
const projectData = [{name: 'Budget Tracker', description: 'This app allows user with or without network connection to enter expenses and withdrawals. Transaction is shown on the page even if there is no connection. Transaction is added to database when a user is back online. MongoDB noSQL platform was used to record data in a database along with its ODM (object data modeling) library called mongoose. Express.js was used to run app on a server.', imageData: <img src={budgetTracker} width={300} alt={"budget tracker app image"}/>, gitLink: <a href="https://github.com/umnovjp/everNegativeBudget/">GitHub Link</a>, liveLink: <a className='listItem' href="https://nameless-brushlands-27009.herokuapp.com/">Budget Tracker at Heroku</a> }, {name: 'E-Commerce Back End', description: 'This app will help a manager of an Internet retail company to track stock, products categories, prices, and tags. The app speciies many GET, POST, DELETE, PUT routes. mySQL database used to store data. ', imageData: <img src={ecommerce} width={300} alt={"ecommerce app image"}/>, gitLink: <a href="https://github.com/umnovjp/ORM">E-Commerce Back End Github</a>, liveLink: <a href="https://onedrive.live.com/?authkey=%21ADPrXj6LsUGpsdo&id=E3BDDD59931E705%21562&cid=0E3BDDD59931E705">E-Commerce Back End Video Demo Titled ORM_Demo3</a>}, {name: 'Fitness Tracker', description: 'I created this app for a user to view, create and track daily workouts. A user wants to be able to log multiple exercises in a workout on a given day. He should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, he should be able to track his distance traveled.', imageData: <img src={fitness} width={300} alt={"fitness tracker app image"}/>, gitLink: <a href="https://github.com/umnovjp/FitnessXpress">Fitness Tracker Github</a>, liveLink: <a className='listItem' href="https://murmuring-spire-84992.herokuapp.com/">Fitness Tracker at Heroku</a>}, {name: 'Work Day Scheduler', description: 'Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.', imageData: <img src={workday} width={300} alt={"scheduler app image"}/>, gitLink: <a className='listItem' href="https://github.com/umnovjp/Work_Day_Scheduler">Work Day Scheduler Github</a>, liveLink: <a className='listItem' href="https://umnovjp.github.io/Work_Day_Scheduler/">Work Day Scheduler Live</a>} ];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
     {projectData.map(
       project => (
        <Project project={project} />
       )
     ) }
     
    </div>
   
  );
}
