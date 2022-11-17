import React from 'react';
import { CookieBot } from 'react-cookiebot';

export const CookieBotAppExtra = ({ location, content }) => {
  const domainGroupId = 'ecff8d69-d1cb-416f-a86f-ba55b3f38707';

  return <CookieBot domainGroupId={domainGroupId} />;
};

export default CookieBotAppExtra;
