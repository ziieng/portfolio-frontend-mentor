import Button from "../components/Button/Button";
import ContactCta from "../components/ContactCta/ContactCta";
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";
import HeroDesktop from "../assets/images/detail/desktop/image-insure-hero@2x.jpg";
import HeroTablet from "../assets/images/detail/tablet/image-insure-hero@2x.jpg";
import HeroMobile from "../assets/images/detail/mobile/image-insure-hero@2x.jpg";
import PreviewOneDesktop from "../assets/images/detail/desktop/image-insure-preview-1@2x.jpg";
import PreviewOneTablet from "../assets/images/detail/tablet/image-insure-preview-1@2x.jpg";
import PreviewOneMobile from "../assets/images/detail/mobile/image-insure-preview-1@2x.jpg";
import PreviewTwoDesktop from "../assets/images/detail/desktop/image-insure-preview-2@2x.jpg";
import PreviewTwoTablet from "../assets/images/detail/tablet/image-insure-preview-2@2x.jpg";
import PreviewTwoMobile from "../assets/images/detail/mobile/image-insure-preview-2@2x.jpg";
import "../assets/styles/PortfolioDetails.css";

const projectSummary =
  "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.";

const SkillsUsedSection = (
  <>
    <p className="skills-used">Interaction Design / Front End Development</p>
    <p className="skills-used">HTML / CSS / JS</p>
    <Button
      text="Visit Website"
      navTo="https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8"
    />
  </>
);

const Insure = () => (
  <article>
    <img
      className="project-hero"
      srcSet={`${HeroDesktop} 1200w, ${HeroTablet} 768w, ${HeroMobile} 375w`}
      alt="Insure project hero image"
    />
    <div className="project-detail-page">
      <div className="project-overview">
        <div className="project-summary">
          <h1>Insure</h1>
          <p className="hide-on-tablet">{projectSummary}</p>
          <div className="show-on-tablet">{SkillsUsedSection}</div>
        </div>
        <div className="hide-on-tablet">{SkillsUsedSection}</div>
        <div className="show-on-tablet project-summary">
          <p>{projectSummary}</p>
        </div>
      </div>
      <div className="project-details">
        <h2>Project Background</h2>
        <p>
          This project was a front-end challenge from{" "}
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. It's a
          platform that enables you to practice building websites to a design
          and project brief. Each challenge includes mobile and desktop designs
          to show how the website should look at different screen sizes.
          Creating these projects has helped me refine my workflow and solve
          real-world coding problems. I've learned something new with each
          project, helping me to improve and adapt my style.
        </p>

        <h2>Static Previews</h2>
        <img
          className="project-preview"
          srcSet={`${PreviewOneDesktop} 1200w, ${PreviewOneTablet} 768w, ${PreviewOneMobile} 375w`}
          alt="Insure project preview one"
        />
        <img
          className="project-preview"
          srcSet={`${PreviewTwoDesktop} 1200w, ${PreviewTwoTablet} 768w, ${PreviewTwoMobile} 375w`}
          alt="Insure project preview two"
        />
      </div>
    </div>
    <PortfolioNav
      previous={{ label: "Bookmark", link: "/portfolio/bookmark" }}
      next={{ label: "Fylo", link: "/portfolio/fylo" }}
    />

    <ContactCta />
  </article>
);

export default Insure;
