import { ArrowDown, Send } from 'lucide-react';
import { CONTACTS, type Content } from '@/data/content';
import Portrait from './Portrait';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ hero, metrics }: { hero: Content['hero']; metrics: Content['metrics'] }) {
    return (
        <section id="top" className="relative overflow-x-clip bg-paper pt-14 text-ink">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-8 pt-8 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-32 lg:pt-12">
                <div className="lg:col-span-8">
                    <h1 className="poster text-[clamp(2.1rem,8.2vw,5.5rem)] text-balance break-words">
                        {hero.before}
                        <span className="box-decoration-clone bg-red px-2 text-cream">{hero.accent}</span>
                        {hero.after}
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg lg:text-xl">
                        {hero.sub}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                        <a
                            href={CONTACTS.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-red hover:text-cream sm:px-8 sm:py-4 sm:text-base"
                        >
                            <Send size={20} aria-hidden="true" />
                            Telegram
                        </a>
                        <a
                            href={CONTACTS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink sm:px-8 sm:py-4 sm:text-base"
                        >
                            <WhatsAppIcon size={20} />
                            WhatsApp
                        </a>
                        <a
                            href="#cases"
                            className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-bold uppercase tracking-wide underline decoration-red decoration-4 underline-offset-8 hover:decoration-ink sm:py-4 sm:text-base"
                        >
                            {hero.ctaSecondary}
                            <ArrowDown size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[14rem] sm:max-w-[18rem] lg:col-span-4 lg:max-w-none lg:pt-6">
                    <Portrait alt="TimaSonr" />
                    <p className="poster mt-3 text-center text-sm tracking-normal text-ink sm:mt-4 sm:text-lg">{hero.eyebrow}</p>
                </div>
            </div>

            {/* Телефон: столбик на всю ширину, без поворота — текст целиком виден */}
            <div className="bg-ink px-5 py-5 text-cream lg:hidden" role="list" aria-label="Metrics">
                <div className="poster tabular mx-auto flex max-w-7xl flex-col gap-3 text-lg tracking-normal sm:text-xl">
                    {metrics.map((m) => (
                        <span key={m.label} role="listitem" className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="text-hot">{m.value}</span>
                            <span className="font-bold">{m.label}</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Десктоп: диагональная полоса */}
            <div
                className="anim-band absolute bottom-8 hidden bg-ink py-4 text-cream lg:bottom-10 lg:block"
                role="list"
                aria-label="Metrics"
                style={{ left: '-40%', width: '180%', transform: 'rotate(-3.5deg)' }}
            >
                <div className="poster tabular flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 text-2xl tracking-normal">
                    {metrics.map((m, i) => (
                        <span key={m.label} role="listitem" className="flex items-center gap-6">
                            <span>
                                <span className="text-hot">{m.value}</span>{' '}
                                <span className="font-bold">{m.label}</span>
                            </span>
                            {i < metrics.length - 1 && <span className="h-3 w-3 bg-red" aria-hidden="true" />}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
