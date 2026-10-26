export const locales = ['en', 'ru', 'sr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
    en: 'English',
    ru: 'Русский',
    sr: 'Srpski',
};

export const ogLocale: Record<Locale, string> = {
    en: 'en_US',
    ru: 'ru_RU',
    sr: 'sr_RS',
};

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

/** Выбор языка по браузеру: sr → ru → en. */
export function localeFromNavigator(language: string | undefined): Locale {
    const n = (language ?? defaultLocale).toLowerCase();
    if (n.startsWith('sr') || n.startsWith('sh')) return 'sr';
    if (n.startsWith('ru')) return 'ru';
    return 'en';
}
