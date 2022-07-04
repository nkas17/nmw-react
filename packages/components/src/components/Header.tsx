import * as React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
/*
 * Header component to wrap header tag with nmw-header css class
 */
function Header({ children, className = '' }: HeaderProps) {
  return (
    <header className={`${className ? `nmw-header ${className}` : 'nmw-header'}`}>
      {children}
    </header>
  );
}

Header.displayName = 'Header';
export default Header;
