'use client';

import { useState } from 'react';
import type { Content } from '@/data/content';

export default function Faq({ faq }: { faq: Content['faq'] }) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-paper pb-20 lg:pb-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
                <div className="grid gap-10 border-t-[6px] border-ink pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
                    <h2 className="poster text-[clamp(2.25rem,5.6vw,4.5rem)] lg:col-span-4">{faq.title}</h2>

                    <div className="lg:col-span-8">
                        {faq.items.map((item, i) => {
                            const isOpen = openIdx === i;
                            return (
                                <div key={item.q} className="border-b-2 border-ink first:border-t-2">
                                    <h3>
                                        <button
                                            type="button"
                                            onClick={() => setOpenIdx(isOpen ? null : i)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-start justify-between gap-6 py-5 text-left"
                                        >
                                            <span className="text-lg font-bold leading-snug sm:text-xl">{item.q}</span>
                                            <span
                                                aria-hidden="true"
                                                className={`mt-1 grid h-7 w-7 shrink-0 place-items-center bg-ink text-cream transition-transform duration-300 ${
                                                    isOpen ? 'rotate-45 bg-red' : ''
                                                }`}
                                            >
                                                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M8 1v14M1 8h14" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ${
                                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="max-w-2xl pb-6 text-base text-ink-soft">{item.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
