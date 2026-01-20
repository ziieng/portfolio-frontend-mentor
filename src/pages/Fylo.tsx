import Button from "../components/Button/Button";
import ContactCta from "../components/ContactCta/ContactCta";
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";

const Fylo = () => (
  <div>
    <div className="project-summary">
      <h1>Fylo</h1>
      <p>
        This project was built in pure HTML and CSS. I had mobile and desktop
        designs to work to and built it so that it was fully-responsive. I took
        a mobile-first approach and used modern CSS like Flexbox and Grid for
        layout purposes.
      </p>

      <p className="skill-highlight">
        Interaction Design / Front End Development
      </p>
      <p className="skill-highlight">HTML / CSS</p>
      <Button
        text="Visit Website"
        navTo="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"
      />
    </div>
    <div className="project-details">
      <h2>Project Background</h2>
      <p>
        This project was a front-end challenge from{" "}
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. It's a
        platform that enables you to practice building websites to a design and
        project brief. Each challenge includes mobile and desktop designs to
        show how the website should look at different screen sizes. Creating
        these projects has helped me refine my workflow and solve real-world
        coding problems. I've learned something new with each project, helping
        me to improve and adapt my style.
      </p>

      <h2>Static Previews</h2>
    </div>
    <PortfolioNav
      previous={{ label: "Insure", link: "/portfolio/insure" }}
      next={{ label: "Manage", link: "/portfolio/manage" }}
    />

    <ContactCta />
  </div>
);

export default Fylo;
