import * as React from 'react';

export interface CardProps {
  type?: 'elevated' | 'filled' | 'outlined' | undefined;
  children: React.ReactNode;
  className?: string;
}

function Card({ children, type = 'elevated', className = '' }: CardProps) {
  let cssClasses = type ? `nmw-card nmw-card-${type}` : 'nmw-card';
  if (className) {
    cssClasses = `${cssClasses} ${className}`;
  }
  return <article className={cssClasses}>{children}</article>;
}

Card.displayName = 'Card';
export default Card;
