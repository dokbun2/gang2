
import React from 'react';

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-950/50 shadow-lg backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
