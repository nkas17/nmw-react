/* eslint-disable react/button-has-type */
import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  name?: string;
  onClick?: React.MouseEventHandler<Element> | undefined;
}

function Button({ children, id, name, type, className = '', onClick }: ButtonProps) {
  return (
    <button
      id={id}
      name={name}
      type={type}
      className={className ? `${className} nmw-button` : 'nmw-button'}
      onClick={onClick}
    >
      {`${children}`}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
