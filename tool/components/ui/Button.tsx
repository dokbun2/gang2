
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'sm';
}

const Button: React.FC<ButtonProps> = ({ className, children, variant = 'primary', size = 'default', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variantStyles = {
    primary: 'bg-gray-50 text-gray-900 hover:bg-gray-200',
    secondary: 'bg-zinc-800 text-gray-50 hover:bg-zinc-700 border border-zinc-700'
  };

  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3'
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };