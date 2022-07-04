import React from 'react';
import { Card, Header, Section, Input, ContentBox } from '@nmw/react-components';

function Inputs() {
  return (
    <Section>
      <Card type="filled" className="nmw-top-0">
        <Header className="nmw-card-header">
          <h2>Inputs</h2>
        </Header>
        <p>
          There are a number of inputs to choose based on the data you are trying to collect. Try to
          select the correct inout based on the data type you are collecting.
        </p>
      </Card>
      <ContentBox type="outlined" className="nmw-left-32 nmw-right-32">
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="text">text</label> <Input id="text" type="text" />
        </div>
        <div className="nmw-top-16">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="checkbox">checkbox</label> <Input id="checkbox" type="checkbox" />
        </div>
      </ContentBox>
    </Section>
  );
}

export default Inputs;
