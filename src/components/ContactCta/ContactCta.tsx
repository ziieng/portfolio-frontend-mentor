import { useNavigate } from "react-router-dom";
import "./ContactCta.css";

const ContactCta = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="contact-cta">
      <h2>Interested in doing a project together?</h2>
      <hr />
      <button
        onClick={handleContactClick}
        className="secondary-btn"
        type="button"
      >
        Contact Me
      </button>
    </div>
  );
};

export default ContactCta;
