# volto-cookiebot

An addon to integrate [Cookiebot](https://www.cookiebot.com/es/) in a Volto site


## Installation

Add `@codesyntax/volto-cookiebot` to your project dependencies and to the `addons` list.

## Configuration

Set your cookiebot project id in the volto settings:

```jsx
const applyConfig = (config) => {

  config.settings = {
    ...config.settings,
    cookiebotDomainGroupId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',    
  };

  return config;
};
export default applyConfig;

```

Cookiebot will be added to your site using the `appExtras` mechanism of Volto.
