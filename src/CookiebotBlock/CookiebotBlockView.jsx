import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import config from '@plone/volto/registry';

const CookiebotBlock = (props) => {
  const domainGroupId = config.settings.cookiebotDomainGroupId;
  const language = useSelector((state) => state.intl.locale);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    try {
      console.log(language);
      const cookieDeclaration = document.getElementById('cookie-declaration');

      const inlineScript = document.createElement('script');
      inlineScript.id = 'CookieDeclaration';
      inlineScript.src = `https://consent.cookiebot.com/${domainGroupId}/cd.js`;
      inlineScript.type = 'text/javascript';
      inlineScript['data-culture'] = language;
      inlineScript.async = true;
      if (!isRendered) {
        cookieDeclaration.append(inlineScript);
        setIsRendered(true);
      }

      // componentWillUnmount() {}
      return () => {
        inlineScript.remove();
      };
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return <div id="cookie-declaration"></div>;
};

export default CookiebotBlock;
