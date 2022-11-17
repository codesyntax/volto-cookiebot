import { CookieBotAppExtra } from './';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...applyConfig(config.settings.appExtras || []),
    {
      match: '',
      component: CookieBotAppExtra,
    },
  ];
  return config;
};

export default applyConfig;
