import Button from "../components/Button/Button";
import ContactCta from "../components/ContactCta/ContactCta";
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";

const Insure = () => (
  <div>
    <h1>Insure</h1>
    <p>
      This was a small project which mostly consisted of HTML and CSS. I built a
      fully-responsive landing page. The only JavaScript this project required
      was to enable the toggling of the mobile navigation.
    </p>

    <p>Interaction Design / Front End Development</p>
    <p>HTML / CSS / JS</p>
    <Button
      text="Visit Website"
      navTo="https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8"
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
      previous={{ label: "Bookmark", link: "/portfolio/bookmark" }}
      next={{ label: "Fylo", link: "/portfolio/fylo" }}
    />

    <ContactCta />
  </div>
);

export default Insure;
