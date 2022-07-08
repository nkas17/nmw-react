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
