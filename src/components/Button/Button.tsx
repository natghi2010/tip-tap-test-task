import React from "react";
import "./Button.less";

interface ButtonProps {
  icon: string;
  onClick: () => void;
  altText?: string; // Optional prop for accessibility
  isActive?: boolean; // Optional prop to highlight the button as active
}

const Button: React.FC<ButtonProps> = ({ icon, onClick, altText = "icon", isActive = false }) => {
  return (
    <button
      className={`buttonIconSidebar ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label={altText} // Accessibility label
      role="button"
    >
      <img src={icon} alt={altText} />
    </button>
  );
};

export default Button;