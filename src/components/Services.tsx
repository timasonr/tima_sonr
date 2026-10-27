import type { Content } from '@/data/content';
import Shape, { type ShapeKind } from './Shape';

const SHAPES: Record<'sites' | 'mvp' | 'automation', { kind: ShapeKind; color: string }> = {
    sites: { kind: 'square', color: 'text-red' },
    mvp: { kind: 'triangle', color: 'text-ink' },
    automation: { kind: 'circle', color: 'text-red' },
};

export default function Services({ services }: { services: Content['services'] }) {
    return (
        <section id="services" className="bg-paper py-14 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
                <h2 className="poster max-w-4xl text-[clamp(2.25rem,5.6vw,4.5rem)] text-balance">{services.title}</h2>
                <p className="mt-5 max-w-2xl text-lg text-ink-soft">{services.subtitle}</p>

                <div className="mt-14 border-b-[6px] border-ink lg:mt-20">
                    {services.items.map((s) => {
                        const shape = SHAPES[s.id];
                        return (
                            <article
                                key={s.id}
                                className="grid gap-6 border-t-[6px] border-ink py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
                            >
                                <div className="lg:col-span-5">
                                    <Shape kind={shape.kind} className={`mb-6 h-14 w-14 lg:h-20 lg:w-20 ${shape.color}`} />
                                    <h3 className="poster text-[clamp(1.9rem,3.6vw,3rem)] text-balance">{s.title}</h3>
                                    <p className="mt-4 max-w-md text-ink-soft">{s.pain}</p>
                                </div>

                                <div className="lg:col-span-4 lg:col-start-7">
                                    <p className="poster text-xl tracking-normal text-red">{services.includes}</p>
                                    <ul className="mt-3 divide-y divide-ink/25 border-t-2 border-ink">
                                        {s.items.map((item) => (
                                            <li key={item} className="py-3 text-base font-medium">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lg:col-span-2 lg:col-start-11">
                                    <p className="poster text-xl tracking-normal text-red">{services.format}</p>
                                    <p className="mt-3 text-base font-bold">{s.format}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
