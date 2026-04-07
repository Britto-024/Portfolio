import "./Project.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "Responsive Website Design",
    img: img1,
    desc: "Designed a responsive website prototype focusing on user experience, layout structure, and mobile adaptability.",
    skills: ["Figma"]
  },
  {
    title: "Personal Portfolio Website",
    img: img2,
    desc: "Built a responsive portfolio website to showcase skills, projects, and contact details with clean UI and smooth navigation.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Mini Laptop Piano",
    img: img3,
    desc: "Developed an interactive web-based piano enabling keyboard-based note playback with real-time sound and responsive UI.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Gesture-Controlled 3D Particle System",
    img: img4,
    desc: "Created an interactive 3D particle visualization system with real-time hand gesture recognition and dynamic WebGL animations.",
    skills: ["Three.js", "JavaScript", "MediaPipe"]
  },
  {
    title: "Jujutsu Kaisen 3D Experience",
    img: img5,
    desc: "Developed an anime-inspired 3D particle system with gesture-triggered effects, domain expansions, and immersive WebGL visuals.",
    skills: ["Three.js", "JavaScript", "MediaPipe"]
  },
  {
    title: "TrackX – Smart Expense Tracker",
    img: img6,
    desc: "Built a web-based expense tracker for managing transactions, budgeting, and spending analysis with dashboard insights.",
    skills: ["HTML", "CSS", "JS", "LocalStorage"]
  },
  {
    title: "Service Desk System",
    img: img1,
    desc: "Help desk web application with ticket creation, role-based access, status tracking, and an interactive support dashboard.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Finger Gun – Web Game",
    img: img2,
    desc: "Interactive game using real-time hand gesture recognition for aiming and shooting, featuring dynamic 3D environments.",
    skills: ["Three.js", "JavaScript", "MediaPipe"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}