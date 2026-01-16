import "../assets/styles/Portfolio.css";
import ContactCta from "../components/ContactCta/ContactCta";
import Button from "../components/Button/Button";
import ManageDesktop from "../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import ManageTablet from "../assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import ManageMobile from "../assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import BookmarkDesktop from "../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import BookmarkTablet from "../assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import BookmarkMobile from "../assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import InsureDesktop from "../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg";
import InsureTablet from "../assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import InsureMobile from "../assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import FyloDesktop from "../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import FyloTablet from "../assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import FyloMobile from "../assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg";

const Portfolio = () => (
  <div>
    <h1 style={{ display: "none" }}>Portfolio</h1>

    <div className="project-row">
      <div className="project-image">
        <img
          src={ManageDesktop}
          srcSet={`${ManageMobile} 375w, ${ManageTablet} 768w, ${ManageDesktop} 1440w`}
          alt="Manage project preview"
        />
      </div>
      <div className="project-content">
        <div className="project-text">
          <h2>Manage</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <Button text="View Project" navTo="/portfolio/manage" />
        </div>
      </div>
    </div>

    <div className="project-row">
      <div className="project-image">
        <img
          src={BookmarkDesktop}
          srcSet={`${BookmarkMobile} 375w, ${BookmarkTablet} 768w, ${BookmarkDesktop} 1440w`}
          alt="Bookmark project preview"
        />
      </div>
      <div className="project-content">
        <div className="project-text">
          <h2>Bookmark</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <Button text="View Project" navTo="/portfolio/bookmark" />
        </div>
      </div>
    </div>

    <div className="project-row">
      <div className="project-image">
        <img
          src={InsureDesktop}
          srcSet={`${InsureMobile} 375w, ${InsureTablet} 768w, ${InsureDesktop} 1440w`}
          alt="Insure project preview"
        />
      </div>
      <div className="project-content">
        <div className="project-text">
          <h2>Insure</h2>
          <p>
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </p>
          <Button text="View Project" navTo="/portfolio/insure" />
        </div>
      </div>
    </div>

    <div className="project-row">
      <div className="project-image">
        <img
          src={FyloDesktop}
          srcSet={`${FyloMobile} 375w, ${FyloTablet} 768w, ${FyloDesktop} 1440w`}
          alt="Fylo project preview"
        />
      </div>
      <div className="project-content">
        <div className="project-text">
          <h2>Fylo</h2>
          <p>
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
          </p>
          <Button text="View Project" navTo="/portfolio/fylo" />
        </div>
      </div>
    </div>

    <ContactCta />
  </div>
);

export default Portfolio;
