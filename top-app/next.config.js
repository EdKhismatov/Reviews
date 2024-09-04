module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          and: [/\.(js|ts)x?$/]  // Использование логического оператора "and"
        },
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };