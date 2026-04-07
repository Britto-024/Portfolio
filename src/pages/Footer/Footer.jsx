import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">
        <p>© 2026 John Britto A J</p>

        <div className="social-icons">

          <a href="https://github.com/Britto-024" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://linkedin.com/in/johnbritto20" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          <a href="https://www.instagram.com/britto_024?igsh=MTc5NXFxMDUyOW15dg==" target="_blank" rel="noreferrer"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;