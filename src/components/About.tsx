import { STACK, type Content } from '@/data/content';
import Shape from './Shape';

export default function About({ about }: { about: Content['about'] }) {
    return (
        <section id="about" aria-label={about.title} className="relative overflow-hidden bg-ink py-14 text-cream lg:py-28">
            <Shape
                kind="circle"
                className="pointer-events-none absolute -bottom-24 -right-24 hidden h-64 w-64 text-red lg:block lg:-bottom-20 lg:-right-12 lg:h-96 lg:w-96"
            />
            <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-8 lg:px-10">
                <div className="lg:col-span-8">
                    <h2 className="poster text-[clamp(2.25rem,5.6vw,4.5rem)] text-balance">{about.headline}</h2>
                    <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-cream-soft">
                        {about.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4 lg:col-start-9 lg:pt-28">
                    <h3 className="poster text-2xl tracking-normal text-hot">{about.stackTitle}</h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {STACK.map((s) => (
                            <li key={s} className="bg-cream px-3 py-1.5 text-sm font-semibold text-ink">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
