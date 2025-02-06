import React from "react";
import "./Button.less";

interface ButtonProps {
  icon: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="buttonIconSidebar" onClick={onClick}>
      <img src={icon} />
    </button>
  );
};

export default Button;
