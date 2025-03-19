import { useSelector } from 'react-redux';

import config from '@plone/volto/registry';

export const CookieBotAppExtra = (props) => {
  const domainGroupId = config.settings.cookiebotDomainGroupId;
  const language = useSelector((state) => state.intl.locale);
  /* istanbul ignore next */
  if (typeof window === 'undefined') {
    return null;
  }
  if (!domainGroupId || !document) {
    return null;
  }
  if (domainGroupId.length !== 36) {
    console.warn(
      `The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`,
    ); // eslint-disable-line no-console
  }
  const script = document.createElement('script');
  script.setAttribute('id', 'CookieBot');
  script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
  script.setAttribute('data-cbid', domainGroupId);
  script.setAttribute('data-blockingmode', 'auto');
  script.setAttribute('type', 'text/javascript');
  if (language) {
    script.setAttribute('data-culture', language);
  }
  const head = document.querySelector('html > head');
  head.insertBefore(script, head.firstChild);
  return <></>;
};
