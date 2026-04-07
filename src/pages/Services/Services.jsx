import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript, and Bootstrap.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>UI/UX Design</h3>
          <p>Creating clean and modern user interfaces with a focus on responsive web design using Figma.</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Backend & Programming</h3>
          <p>Developing scalable backend logic and scripts using Java, Python, and Spring Boot. Familiar with SEO and Digital Marketing.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;