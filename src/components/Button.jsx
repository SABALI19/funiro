import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#B88E2F] text-white hover:bg-[#a27e29] focus:ring-[#B88E2F]",
    secondary:
      "bg-white text-[#B88E2F] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white focus:ring-[#B88E2F]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-8 py-3",
    lg: "text-lg px-12 py-4",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
