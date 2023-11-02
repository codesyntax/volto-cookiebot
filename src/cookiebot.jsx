import CookieBot from 'react-cookiebot';
import { useSelector } from 'react-redux';

import config from '@plone/volto/registry';

export const CookieBotAppExtra = (props) => {
  const domainGroupId = config.settings.cookiebotDomainGroupId;
  const language = useSelector((state) => state.intl.locale);

  return (
    <CookieBot domainGroupId={domainGroupId} language={language || undefined} />
  );
};
