import React from "react";
import "./Button.less";

interface ButtonProps {
  icon: string;
  onClick: () => void;
  altText?: string; 
  isActive?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ icon, onClick, altText = "icon", isActive = false }) => {
  return (
    <button
      className={`buttonIconSidebar ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label={altText} 
      role="button"
    >
      <img src={icon} alt={altText} />
    </button>
  );
};

export default Button;