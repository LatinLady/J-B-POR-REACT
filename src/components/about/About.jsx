import React from "react";
import "./about.css";
import meAbout from "../../assets/me.png";
import { FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="Creator in About Section" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <icon className="about__icon">
                <FaUsers />
              </icon>
            </article>  
            <article className="about__card">
              <icon className="about__icon">
                <FaTasks />
              </icon>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            My name is Jemmy Blyden and I am a Full Stack Web Development Student at UCLA.
          </p>

          <a href="#contact" className="btn btn-primary about__btn">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
