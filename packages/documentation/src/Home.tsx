import * as React from 'react';
import { Page, Header, Section, Button } from '@nmw/react-components';
import { Link, Route, Routes } from 'react-router-dom';
import Cards from './cards/Cards';
import Buttons from './buttons/Buttons';
import Inputs from './inputs/Inputs';
import Navigation from './Navigation';

function Home() {
  const [isShowingNavigation, setIsShowingNavigation] = React.useState<boolean>(true);
  const [size, setSize] = React.useState(window.visualViewport.width);

  const onResize = () => {
    setSize(window.visualViewport.width);

    if (window.visualViewport.width < 680) {
      setIsShowingNavigation(false);
    } else {
      setIsShowingNavigation(true);
    }
  };

  const handleClose = ({ key }: { key: string }) => {
    if (key === 'Escape' && window.visualViewport.width < 680) setIsShowingNavigation(false);
  };

  const handleClick = () => {
    if (window.visualViewport.width < 680 && isShowingNavigation) setIsShowingNavigation(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', handleClose);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', handleClose);
      window.removeEventListener('click', handleClick);
    };
  }, [size, isShowingNavigation]);

  return (
    <Page>
      <div className={isShowingNavigation && size < 680 ? 'nmw-page-overlay' : ''} />
      <Header className="nmw-flex nmw-header__page">
        <Button
          className="nmw-right-32"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setIsShowingNavigation(!isShowingNavigation);
          }}
        >
          {isShowingNavigation ? '-' : '+'}
        </Button>
        <Link to="/">
          <img alt="nmw brand" width={50} src="assets/nmw.png" />
        </Link>
        <h1 className="nmw-header__brand nmw-left-32">nmw design</h1>
      </Header>
      <div className="nmw-flex nmw-page-content">
        <Navigation isShowing={isShowingNavigation} />
        <Section type="page">
          <Routes>
            <Route path="/cards" element={<Cards />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/inputs" element={<Inputs />} />
          </Routes>
        </Section>
      </div>
    </Page>
  );
}

export default Home;
