import * as React from 'react';

export interface NavBarProps {
  children: React.ReactElement[] | React.ReactNode;
  isShowing?: boolean;
}

function NavBar({ children, isShowing = true }: NavBarProps) {
  const width = window?.visualViewport?.width || 0;
  const isFloating = width < 680;
  return isShowing ? (
    <aside className={`${isFloating ? 'nmw-nav-bar__floating' : 'nmw-nav-bar'}`}>
      <nav>{children}</nav>
    </aside>
  ) : null;
}

NavBar.displayName = 'NavBar';
export default NavBar;
