// import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en';
export const locales = ['en', 'pt'];

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    pt: '/pfadnamen' // *
  }
};

export const localePrefix = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;