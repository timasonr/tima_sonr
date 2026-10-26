'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { type Content } from '@/data/content';
import { locales, type Locale } from '@/lib/utils';

export default function Header({ locale, nav }: { locale: Locale; nav: Content['nav'] }) {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: nav.services },
        { href: '#cases', label: nav.cases },
        { href: '#process', label: nav.process },
        { href: '#faq', label: nav.faq },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-ink text-cream">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 lg:px-10">
                <a href="#top" className="poster flex items-center gap-2 text-xl tracking-normal">
                    <span className="inline-block h-4 w-4 bg-red" aria-hidden="true" />
                    TimaSonr
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium uppercase tracking-wider hover:underline hover:decoration-red hover:decoration-2 hover:underline-offset-8"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-3 text-sm font-semibold uppercase sm:flex">
                        {locales.map((l) => (
                            <Link
                                key={l}
                                href={`/${l}`}
                                scroll={false}
                                aria-current={l === locale ? 'true' : undefined}
                                className={
                                    l === locale
                                        ? 'underline decoration-red decoration-2 underline-offset-8'
                                        : 'text-cream-soft hover:text-cream'
                                }
                            >
                                {l}
                            </Link>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden bg-red px-4 py-2 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-ink sm:inline-block"
                    >
                        {nav.cta}
                    </a>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Menu"
                        aria-expanded={open}
                        className="p-2 md:hidden"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-cream/20 bg-ink px-5 pb-6 pt-2 md:hidden">
                    <nav className="flex flex-col" aria-label="Mobile">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="poster border-b border-cream/20 py-3 text-3xl"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex gap-4 text-sm font-semibold uppercase">
                            {locales.map((l) => (
                                <Link
                                    key={l}
                                    href={`/${l}`}
                                    scroll={false}
                                    onClick={() => setOpen(false)}
                                    aria-current={l === locale ? 'true' : undefined}
                                    className={
                                        l === locale
                                            ? 'underline decoration-red decoration-2 underline-offset-8'
                                            : 'text-cream-soft'
                                    }
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="bg-red px-4 py-2 text-sm font-bold uppercase tracking-wide text-cream"
                        >
                            {nav.cta}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
