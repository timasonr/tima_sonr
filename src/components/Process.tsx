import type { Content } from '@/data/content';

/** Шаги идут лестницей вниз по диагонали: порядок здесь несёт смысл, поэтому номера оправданы. */
const OFFSETS = ['lg:mt-0', 'lg:mt-14', 'lg:mt-28', 'lg:mt-42'];

export default function Process({ process }: { process: Content['process'] }) {
    return (
        <section id="process" className="bg-paper py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
                <h2 className="poster max-w-4xl text-[clamp(2.25rem,5.6vw,4.5rem)] text-balance">{process.title}</h2>
                <p className="mt-5 max-w-2xl text-lg text-ink-soft">{process.subtitle}</p>

                <ol className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-6 lg:pb-42">
                    {process.steps.map((s, i) => (
                        <li key={s.title} className={`border-t-[6px] border-ink pt-4 ${OFFSETS[i] ?? ''}`}>
                            <span className="poster tabular block text-[clamp(4.5rem,9vw,6rem)] leading-none text-red">
                                {i + 1}
                            </span>
                            <h3 className="poster mt-4 text-3xl tracking-normal">{s.title}</h3>
                            <p className="mt-3 text-base text-ink-soft">{s.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
