import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit';
  secondary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  svg?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  secondary,
  onClick,
  children,
  svg
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full p-3.5 rounded-radius text-sm font-medium flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5
      ${secondary
        ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-md'
        : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'}`}
  >
    {svg}
    {children}
  </button>
)

export default Button