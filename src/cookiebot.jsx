import CookieBot from 'react-cookiebot';

import config from '@plone/volto/registry';

export const CookieBotAppExtra = (props) => {
  const domainGroupId = config.settings.cookiebotDomainGroupId;
  return <CookieBot domainGroupId={domainGroupId} />;
};
