import * as React from 'react';
import { NavBar, NavBarItem } from '@nmw/react-components';
import { Link } from 'react-router-dom';

function Navigation({ isShowing = true }: { isShowing: boolean }) {
  const [selected, setSelected] = React.useState('');
  return (
    <NavBar isShowing={isShowing}>
      <NavBarItem selected={selected === 'cards'}>
        <Link
          to="/cards"
          onClick={() => {
            setSelected('cards');
            window.scrollTo(0, 0);
          }}
        >
          Cards
        </Link>
      </NavBarItem>
      <NavBarItem selected={selected === 'buttons'}>
        <Link
          to="/buttons"
          onClick={() => {
            setSelected('buttons');
            window.scrollTo(0, 0);
          }}
        >
          Buttons
        </Link>
      </NavBarItem>
      <NavBarItem selected={selected === 'inputs'}>
        <Link
          to="/inputs"
          onClick={() => {
            setSelected('inputs');
            window.scrollTo(0, 0);
          }}
        >
          Inputs
        </Link>
      </NavBarItem>
    </NavBar>
  );
}

Navigation.displayName = 'Navigation';
export default Navigation;
