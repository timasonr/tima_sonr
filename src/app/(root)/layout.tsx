import type { Metadata } from 'next';
import { defaultLocale } from '@/i18n/config';

export const metadata: Metadata = {
    title: 'TimaSonr',
    robots: { index: false },
};

/** Корневой layout только для редиректа с "/" на язык. Основной сайт живёт в [lang]. */
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={defaultLocale}>
            <head>
                <meta httpEquiv="refresh" content={`0; url=${defaultLocale}/`} />
            </head>
            <body style={{ margin: 0, background: '#ebe4d2', fontFamily: 'sans-serif' }}>{children}</body>
        </html>
    );
}
