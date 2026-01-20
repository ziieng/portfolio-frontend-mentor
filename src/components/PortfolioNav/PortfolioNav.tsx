import { Link } from "react-router-dom";
import "./PortfolioNav.css";
import ArrowLeft from "../../assets/images/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/images/icons/arrow-right.svg?react";

type PortfolioNavProps = {
  previous: {
    label: string;
    link: string;
  };
  next: {
    label: string;
    link: string;
  };
};

const PortfolioNav = (props: PortfolioNavProps) => {
  const { previous, next } = props;

  return (
    <div className="portfolio-nav">
      <div className="portfolio-previous">
        <ArrowLeft className="icon-previous" />
        <div>
          <Link to={previous.link}>{previous.label}</Link>
          <p>Previous Project</p>
        </div>
      </div>
      <div className="portfolio-next">
        <div>
          <Link to={next.link}>{next.label}</Link>
          <p>Next Project</p>
        </div>
        <ArrowRight className="icon-next" />
      </div>
    </div>
  );
};

export default PortfolioNav;
