import { en } from './messages/en';
import { ru } from './messages/ru';
import { sr } from './messages/sr';
import { defaultLocale, isLocale, type Locale } from './config';
import type { Content } from './types';

export const messages: Record<Locale, Content> = { en, ru, sr };

export function getMessages(locale: Locale): Content {
    return messages[locale] ?? messages[defaultLocale];
}

export { defaultLocale, isLocale, localeFromNavigator, localeNames, locales, ogLocale, type Locale } from './config';
export type { Content } from './types';
