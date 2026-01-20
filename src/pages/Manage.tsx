import Button from "../components/Button/Button";
import ContactCta from "../components/ContactCta/ContactCta";
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";

const Manage = () => (
  <div>
    <h1>Manage</h1>
    <p>
      This project required me to build a fully responsive landing page to the
      designs provided. I used HTML5, along with CSS Grid and JavaScript for the
      areas that required interactivity, such as the testimonial slider.
    </p>

    <p>Interaction Design / Front End Development</p>
    <p>HTML / CSS / JS</p>
    <Button
      text="Visit Website"
      navTo="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5"
    />

    <h2>Project Background</h2>
    <p>
      This project was a front-end challenge from{" "}
      <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. It's a
      platform that enables you to practice building websites to a design and
      project brief. Each challenge includes mobile and desktop designs to show
      how the website should look at different screen sizes. Creating these
      projects has helped me refine my workflow and solve real-world coding
      problems. I've learned something new with each project, helping me to
      improve and adapt my style.
    </p>

    <h2>Static Previews</h2>
    <PortfolioNav
      previous={{ label: "Fylo", link: "/portfolio/fylo" }}
      next={{ label: "Bookmark", link: "/portfolio/bookmark" }}
    />

    <ContactCta />
  </div>
);

export default Manage;
