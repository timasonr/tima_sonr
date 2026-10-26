import type { Metadata, Viewport } from 'next';
import { Fira_Sans_Extra_Condensed, Golos_Text } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { getMessages, isLocale, locales, ogLocale } from '@/i18n';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const display = Fira_Sans_Extra_Condensed({
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    weight: ['700', '800', '900'],
    variable: '--font-fira',
    display: 'swap',
});

const body = Golos_Text({
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    variable: '--font-golos',
    display: 'swap',
});

export const viewport: Viewport = {
    themeColor: '#ebe4d2',
};

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};
    const { meta } = getMessages(lang);

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            languages: Object.fromEntries(locales.map((l) => [l, `${BASE_PATH}/${l}/`])),
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: 'website',
            locale: ogLocale[lang],
        },
    };
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    return (
        <html lang={lang} className={`${display.variable} ${body.variable}`}>
            <body>{children}</body>
        </html>
    );
}
