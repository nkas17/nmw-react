import * as React from 'react';
import { Page, Header, NavBar, NavBarItem, Section } from '@nmw/react-components';
import { Link, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import Buttons from './Buttons';
import Inputs from './Inputs';

function Home() {
  const [selected, setSelected] = React.useState('');
  return (
    <Page>
      <Header className="nmw-flex nmw-header__page">
        <Link to="/">
          <img alt="nmw brand" width="50" src="assets/nmw.png" />
        </Link>
        <h1 className="nmw-header__brand nmw-left-32">nmw design</h1>
      </Header>
      <div className="nmw-flex nmw-page-content">
        <NavBar>
          <NavBarItem selected={selected === 'cards'}>
            <Link to="/cards" onClick={() => setSelected('cards')}>
              Cards
            </Link>
          </NavBarItem>
          <NavBarItem selected={selected === 'buttons'}>
            <Link to="/buttons" onClick={() => setSelected('buttons')}>
              Buttons
            </Link>
          </NavBarItem>
          <NavBarItem selected={selected === 'inputs'}>
            <Link to="/inputs" onClick={() => setSelected('inputs')}>
              Inputs
            </Link>
          </NavBarItem>
        </NavBar>
        <Section type="page">
          <Routes>
            <Route path="/cards" element={<Cards />} />
          </Routes>
          <Routes>
            <Route path="/buttons" element={<Buttons />} />
          </Routes>
          <Routes>
            <Route path="/inputs" element={<Inputs />} />
          </Routes>
        </Section>
      </div>
    </Page>
  );
}

export default Home;
