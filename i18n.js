module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'error'],
    '/': ['home', 'roadmap'],
  },
  loadLocaleFrom: (lang, namespace) => {
    return import(`./locales/${lang}/${namespace}.yaml`).then((m) => m.default)
  },
}
