import * as React from 'react';

export interface NavBarItemProps {
  children: React.ReactElement[] | React.ReactNode;
  selected: boolean;
}

function NavBarItem({ children, selected }: NavBarItemProps) {
  return (
    <div className={selected ? 'nmw-nav-item nmw-nav-item--selected' : 'nmw-nav-item'}>
      {children}
    </div>
  );
}

NavBarItem.displayName = 'NavBarItem';
export default NavBarItem;
