import React from 'react';
import { Card, ContentBox, Button, Header, Section } from '@nmw/react-components';

function Buttons() {
  return (
    <Section>
      <Card type="filled" className="nmw-top-0">
        <Header className="nmw-card-header">
          <h2>Buttons</h2>
        </Header>
        <p>
          When choosing the right button for an action, consider the level of emphasis each button
          type provides. Also, consider the background the button is being placed upon.
        </p>
      </Card>
      <ContentBox type="outlined" className="nmw-left-32 nmw-right-32">
        <Section>
          <Header className="nmw-card-header">
            <h6>elevated</h6>
          </Header>
          <Button type="button" className="nmw-button-primary-elevated nmw-right-32">
            Primary
          </Button>
          <Button type="button" className="nmw-button-secondary-elevated">
            Secondary
          </Button>
        </Section>
        <Section className="nmw-top-32">
          <Header className="nmw-card-header">
            <h6>flat</h6>
          </Header>
          <Button type="button" className="nmw-button-primary-flat nmw-right-32">
            Primary
          </Button>
          <Button type="button" className="nmw-button-secondary-flat">
            Secondary
          </Button>
          <Button type="button" className="nmw-button-text">
            Text
          </Button>
        </Section>
      </ContentBox>
    </Section>
  );
}

export default Buttons;
