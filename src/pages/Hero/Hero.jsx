import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <img src="/Photo.png" alt="Hero Background" className="hero-img" />
      <div className="content">
        <div className="buttn">
          <a href="#contact" className="hero-btn">Contact</a>
          <a href="#about" className="hero-btn">Who i'm</a>
        </div>
      </div>
    </div>
    
  );
}