'use client';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, type = 'button', variant = 'primary', onClick }) => {
  const baseStyles = 'px-4 py-2 font-medium rounded-md transition';

  const variants = {
    primary: 'bg-black text-white hover:bg-white hover:text-black border border-black',
    secondary: 'bg-white text-black hover:bg-black hover:text-white border border-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
