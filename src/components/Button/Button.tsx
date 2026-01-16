import { useNavigate } from "react-router-dom";
import DownArrows from "../../assets/images/icons/down-arrows.svg?react";
import "./Button.css";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  navTo?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps) => {
  const {
    text,
    variant = "secondary",
    onClick,
    navTo,
    disabled = false,
    type = "button",
  } = props;
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (navTo) {
      navigate(navTo);
    }
    if (onClick) {
      onClick();
    }
  };

  if (variant === "primary") {
    return (
      <button
        onClick={handleBtnClick}
        className={`primary-btn${disabled ? " disabled" : ""}`}
        type={type}
      >
        <DownArrows className="icon" />
        About Me
      </button>
    );
  }

  return (
    <button
      onClick={handleBtnClick}
      className={`secondary-btn${disabled ? " disabled" : ""}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
