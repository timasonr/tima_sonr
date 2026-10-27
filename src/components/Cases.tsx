import { ArrowUpRight } from 'lucide-react';
import type { Content } from '@/data/content';
import Shape, { type ShapeKind } from './Shape';

const SHAPES: Record<string, ShapeKind> = {
    astrototal: 'circle',
    'dice-rabbit': 'square',
    mimeon: 'triangle',
    'nisam-stranac': 'bar',
};

export default function Cases({ cases }: { cases: Content['cases'] }) {
    return (
        <section id="cases" className="bg-ink py-14 text-cream lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
                <h2 className="poster max-w-4xl text-[clamp(2.25rem,5.6vw,4.5rem)] text-balance">{cases.title}</h2>
                <p className="mt-5 max-w-2xl text-lg text-cream-soft">{cases.subtitle}</p>

                <div className="mt-14 lg:mt-20">
                    {cases.items.map((c) => (
                        <article key={c.id} className="border-t-[6px] border-red py-10 lg:py-14">
                            <div className="flex items-end justify-between gap-6">
                                <h3 className="poster break-words text-[clamp(2rem,9vw,6rem)]">{c.title}</h3>
                                <Shape
                                    kind={SHAPES[c.id] ?? 'square'}
                                    className="mb-2 h-12 w-12 shrink-0 text-red lg:h-20 lg:w-20"
                                />
                            </div>
                            <p className="mt-3 text-base font-medium text-cream-soft">{c.tag}</p>

                            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
                                <div className="lg:col-span-4">
                                    <ul className="space-y-4">
                                        {c.metrics.map((m) => (
                                            <li key={m.label} className="flex items-baseline gap-4">
                                                <span className="poster tabular text-3xl tracking-normal text-hot sm:text-4xl">
                                                    {m.value}
                                                </span>
                                                <span className="text-base text-cream">{m.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                                        {c.stack.map((t) => (
                                            <li key={t} className="border border-cream/50 px-3 py-1 text-sm">
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                    {c.url && (
                                        <a
                                            href={c.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-8 inline-flex items-center gap-2 bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-ink"
                                        >
                                            {cases.visit}
                                            <ArrowUpRight size={18} aria-hidden="true" />
                                        </a>
                                    )}
                                </div>

                                <dl className="grid gap-8 md:grid-cols-3 lg:col-span-8">
                                    {(
                                        [
                                            [cases.task, c.task],
                                            [cases.solution, c.solution],
                                            [cases.result, c.result],
                                        ] as const
                                    ).map(([label, text]) => (
                                        <div key={label} className="border-t-2 border-cream pt-4">
                                            <dt className="poster text-2xl tracking-normal text-hot">{label}</dt>
                                            <dd className="mt-3 text-base leading-relaxed text-cream">{text}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
