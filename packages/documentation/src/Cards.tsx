import React from 'react';
import { Card, Header, Section } from '@nmw/react-components';

function Cards() {
  return (
    <Section>
      <Card type="filled" className="nmw-top-0">
        <Header className="nmw-card-header">
          <h2>Cards</h2>
        </Header>
        <p>Cards contain content and actions that relate information about a subject.</p>
      </Card>
      <p className="nmw-left-32 nmw-top-32 nmw-bottom-32">
        There are three types of cards available to choose from.
      </p>
      <Card>
        <h6>elevated</h6>
      </Card>
      <Card type="outlined">
        <h6>outlined</h6>
      </Card>
      <Card type="filled">
        <h6>filled</h6>
      </Card>
    </Section>
  );
}

export default Cards;
