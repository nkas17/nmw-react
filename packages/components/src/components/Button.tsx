/* eslint-disable react/button-has-type */
import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  name?: string;
}

function Button({ children, id, name, type, className = '' }: ButtonProps) {
  return (
    <button
      id={id}
      name={name}
      type={type}
      className={className ? `${className} nmw-button` : 'nmw-button'}
    >
      {`${children}`}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
