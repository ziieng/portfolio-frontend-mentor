import { Link } from "react-router-dom";
import ContactCta from "../components/ContactCta/ContactCta";

const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>

    <h2>Manage</h2>
    <p>
      This project required me to build a fully responsive landing page to the
      designs provided. I used HTML5, along with CSS Grid and JavaScript for the
      areas that required interactivity, such as the testimonial slider.
    </p>
    <Link to="/portfolio/manage">View Project</Link>

    <h2>Bookmark</h2>
    <p>
      This project required me to build a fully responsive landing page to the
      designs provided. I used HTML5, along with CSS Grid and JavaScript for the
      areas that required interactivity, such as the features section.
    </p>
    <Link to="/portfolio/bookmark">View Project</Link>

    <h2>Insure</h2>
    <p>
      This was a small project which mostly consisted of HTML and CSS. I built a
      fully-responsive landing page. The only JavaScript this project required
      was to enable the toggling of the mobile navigation.
    </p>
    <Link to="/portfolio/insure">View Project</Link>

    <h2>Fylo</h2>
    <p>
      This project was built in pure HTML and CSS. I had mobile and desktop
      designs to work to and built it so that it was fully-responsive. I took a
      mobile-first approach and used modern CSS like Flexbox and Grid for layout
      purposes.
    </p>
    <Link to="/portfolio/fylo">View Project</Link>

    <ContactCta />
  </div>
);

export default Portfolio;
