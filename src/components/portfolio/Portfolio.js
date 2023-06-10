//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "../project/Project";

const projects = [
  {
    id: 0,
    title: "WeatherDeashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-deashboard.png",
    description: "This is a weather Dashboard that retrieves data from another application's API",
    repo: "https://github.com/LatinLady/Weather-Dashboard.git",
    live: "none",
  },
  {
    id: 1,
    title: "TeamProfileGenerator",
    languages: "html, js",
    packages: "inquirer 8.2.4, jest",
    image: "/img/team-generator.png",
    description: "This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet.",
    repo: "https://github.com/LatinLady/Team-Profile-Gen.git",
    live: "https://drive.google.com/file/d/1OB-gy1oV3g3kEiKwIOPAKmF7bAyN2Fac/view",
  },
  {
    id: 2,
    title: "WorkDailySchedule",
    languages: "html, css, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "/img/work-schedule.png",
    description: "AS AN employee with a busy schedule I WANT to add important events to a daily planner SO THAT I can manage my time effectively",
    live: "none",
    repo: "https://github.com/LatinLady/work-day-scheduler.git",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
