import { CookieBotAppExtra } from './cookiebot';
import CookiebotBlockView from './CookiebotBlock/CookiebotBlockView';
import CookiebotBlockEdit from './CookiebotBlock/CookiebotBlockEdit';

import infoSVG from '@plone/volto/icons/info.svg';

export default function applyConfig(config) {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    cookiebot: {
      id: 'cookiebot', // The name (id) of the block
      title: 'Cookiebot', // The display name of the block
      icon: infoSVG, // The icon used in the block chooser
      group: 'common', // The group (blocks can be grouped, displayed in the chooser)
      view: CookiebotBlockView, // The view mode component
      edit: CookiebotBlockEdit, // The edit mode component
      restricted: false, // If the block is restricted, it won't show in the chooser
      mostUsed: false, // A meta group `most used`, appearing at the top of the chooser
      blockHasOwnFocusManagement: false, // Set this to true if the block manages its own focus
      sidebarTab: 0, // The sidebar tab you want to be selected when selecting the block
      security: {
        addPermission: [], // Future proof (not implemented yet) add user permission role(s)
        view: [], // Future proof (not implemented yet) view user role(s)
      },
    },
  };
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '*',
      component: CookieBotAppExtra,
    },
  ];

  return config;
}
