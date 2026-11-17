// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://castlelli.github.io',
  base: '/vivapay',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
});
