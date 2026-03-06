import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export const locales = ['en', 'zh', 'ms'];

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let resolvedLocale = locale;
  if (requestLocale) {
    resolvedLocale = await requestLocale;
  }
  
  if (!resolvedLocale || !locales.includes(resolvedLocale)) {
    resolvedLocale = 'en';
  }

  try {
    const filePath = path.resolve(process.cwd(), 'public/locales', `${resolvedLocale}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const messages = JSON.parse(fileContent);

    return {
      locale: resolvedLocale,
      messages
    };
  } catch (error) {
    console.error(`Error loading locale ${resolvedLocale}:`, error);
    return {
      locale: resolvedLocale,
      messages: {}
    };
  }
});
