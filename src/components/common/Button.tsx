import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`base-button-style ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
      {label && <span className="button-label">{label}</span>}
      {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;