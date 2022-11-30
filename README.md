# volto-cookiebot

An addon to integrate [Cookiebot](https://www.cookiebot.com/es/) in a Volto site


## Installation

Add `@codesyntax/volto-cookiebot` to your project dependencies and to the `addons` list.

## Configuration

Set your cookiebot project id in the volto settings:

```
const applyConfig = (config) => {

  config.settings = {
    ...config.settings,
    cookiebotDomainGroupId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',    
  };

  return config;
};
export default applyConfig;

```

