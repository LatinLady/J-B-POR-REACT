import React from "react";
import "./project.css";
import cover1 from "../../assets/team-generator.png";
import cover2 from "../../assets/weather-deasboard.png";
import cover3 from "../../assets/work-schedule.png";

// IMAGES FOR PRIVATE USE ONLY (NO CREATIVE COMMONS)

const data = [
  {
    id: 1,
    image: cover1,
    title: "Team Generator",
    github: "https://github.com/LatinLady/Team-Profile-Gen.git",
    demo: none,
  },
  {
    id: 2,
    image: cover2,
    title: "Weather Deasboard",
    github: "https://github.com/LatinLady/Weather-Dashboard.git",
    demo: none,
  },
  {
    id: 3,
    image: cover3,
    title: "Work schedule",
    github: "https://github.com/LatinLady/work-day-scheduler.git",
    demo: none,
  },
  
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
