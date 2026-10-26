import { ArrowDown, Send } from 'lucide-react';
import { CONTACTS, type Content } from '@/data/content';
import Portrait from './Portrait';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ hero, metrics }: { hero: Content['hero']; metrics: Content['metrics'] }) {
    return (
        <section id="top" className="relative overflow-x-clip bg-paper pt-14 text-ink">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-44 pt-10 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-32 lg:pt-12">
                <div className="lg:col-span-8">
                    <h1 className="poster text-[clamp(2.75rem,7.4vw,5.5rem)] text-balance">
                        {hero.before}
                        <span className="box-decoration-clone bg-red px-2 text-cream">{hero.accent}</span>
                        {hero.after}
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{hero.sub}</p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <a
                            href={CONTACTS.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:bg-red hover:text-cream"
                        >
                            <Send size={20} aria-hidden="true" />
                            Telegram
                        </a>
                        <a
                            href={CONTACTS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-red px-8 py-4 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink"
                        >
                            <WhatsAppIcon size={20} />
                            WhatsApp
                        </a>
                        <a
                            href="#cases"
                            className="inline-flex items-center justify-center gap-2 px-2 py-4 text-base font-bold uppercase tracking-wide underline decoration-red decoration-4 underline-offset-8 hover:decoration-ink"
                        >
                            {hero.ctaSecondary}
                            <ArrowDown size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="relative lg:col-span-4 lg:pt-6">
                    <Portrait alt="TimaSonr" />
                    <p className="poster mt-4 text-center text-lg tracking-normal text-ink">{hero.eyebrow}</p>
                </div>
            </div>

            {/* Шире экрана: после поворота торцы и ушедший вниз край не видны */}
            <div
                className="anim-band absolute bottom-8 bg-ink py-4 text-cream lg:bottom-10"
                role="list"
                aria-label="Metrics"
                style={{ left: '-40%', width: '180%', transform: 'rotate(-3.5deg)' }}
            >
                <div className="poster tabular flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 text-lg tracking-normal sm:text-2xl">
                    {metrics.map((m, i) => (
                        <span key={m.label} role="listitem" className="flex items-center gap-6">
                            <span>
                                <span className="text-hot">{m.value}</span>{' '}
                                <span className="font-bold">{m.label}</span>
                            </span>
                            {i < metrics.length - 1 && (
                                <span className="hidden h-3 w-3 bg-red sm:inline-block" aria-hidden="true" />
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
