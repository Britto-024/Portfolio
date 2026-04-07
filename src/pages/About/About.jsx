import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

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
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
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