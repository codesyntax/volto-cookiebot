import { CookieBotAppExtra } from './cookiebot';

export default function applyConfig(config) {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '*',
      component: CookieBotAppExtra,
    },
  ];
  return config;
}
