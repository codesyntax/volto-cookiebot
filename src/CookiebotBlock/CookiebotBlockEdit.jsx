import React from 'react';
import { useIntl } from 'react-intl';
import { messages } from '../Utils/messages';
import { Header, Segment } from 'semantic-ui-react';

const CookiebotBlock = (props) => {
  const intl = useIntl();
  return (
    <Segment placeholder>
      <Header>
        {intl.formatMessage(messages.cookieDeclarationWillRender)}
      </Header>
    </Segment>
  );
};

export default CookiebotBlock;
