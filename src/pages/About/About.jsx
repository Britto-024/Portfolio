import { useState } from "react";
import "./About.css";
import Skills from "./Skills";
import frontPhoto from "../../assets/images/WhatsApp Image 2026-04-07 at 7.20.29 AM.jpeg";
import backPhoto from "../../assets/images/WhatsApp Image 2026-04-07 at 7.20.30 AM.jpeg";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src={frontPhoto} alt="John Britto front" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src={backPhoto} alt="John Britto back" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I'm John Britto A J, a passionate Computer Science Engineering student currently studying at Loyola Institute of Technology. 
            Dependable employee seeking an opportunity to expand skills and contribute to company success. Considered hardworking, ethical, and detail-oriented.
            I specialize in Java, Python, and Web Technologies including HTML, CSS, JavaScript, React, and Spring Boot. My skills extend to Responsive Web Design, SEO, and Service Desk management.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;