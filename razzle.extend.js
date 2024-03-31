const plugins = (defaultPlugins) => {
  return defaultPlugins;
};

const modify = (config, { target, dev }, webpack) => {
  config.resolve.extensions = [
    ...(config.resolve?.extensions || []),
    '.web.js',
    '.js',
  ];
  return config;
};

module.exports = {
  plugins,
  modify,
};
