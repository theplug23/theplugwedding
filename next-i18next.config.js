const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'en'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  // ns: ['translation'],
  // defaultNS: 'translation',
  localePath: path.resolve('./store/locales'),
};
