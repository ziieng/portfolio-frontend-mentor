import { useNavigate } from "react-router-dom";
import ContactCta from "../components/ContactCta";
import DownArrows from "../assets/images/icons/down-arrows.svg?react";

const Home = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  const scrollToAboutMe = () => {
    document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero-image">
        <div className="hero-content">
          <h1>Hey, I'm Alex Spencer and I love building beautiful websites</h1>
          <button onClick={scrollToAboutMe} className="primary-btn">
            <DownArrows className="icon" />
            About Me
          </button>
        </div>
      </div>
      <h2 id="about-me">About Me</h2>
      <p>
        I'm a junior front-end developer looking for a new role in an exciting
        company. I focus on writing accessible HTML, using modern CSS practices
        and writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I'm based in
        London, UK, but I'm happy working remotely and have experience in remote
        teams. When I'm not coding, you'll find me outdoors. I love being out in
        nature whether that's going for a walk, run or cycling. I'd love you to
        check out my work.
      </p>
      <button onClick={handlePortfolioClick} className="secondary-btn">
        Go to Portfolio
      </button>
      <ContactCta />
    </div>
  );
};

export default Home;
