# volto-cookiebot
[![npm version](https://badge.fury.io/js/@codesyntax%2Fvolto-cookiebot.svg)](https://badge.fury.io/js/@codesyntax%2Fvolto-cookiebot)

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

## Coookie declaration page

This addon also provides a Block that renders the cookie declaration page that is created automatically by Cookiebot. You can add it wherever your site needs to have the cookie declaration page.

