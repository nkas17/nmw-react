import * as React from 'react';

export interface NavBarProps {
  children: React.ReactElement[] | React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  return (
    <aside className="nmw-nav-bar">
      <nav>{children}</nav>
    </aside>
  );
}

NavBar.displayName = 'NavBar';
export default NavBar;
