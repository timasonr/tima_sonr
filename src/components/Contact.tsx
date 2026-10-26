import { ArrowUpRight, Github, Mail, Send } from 'lucide-react';
import { CONTACTS, type Content } from '@/data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact({
    contact,
    footer,
}: {
    contact: Content['contact'];
    footer: Content['footer'];
}) {
    return (
        <>
            <section id="contact" className="bg-ink pt-20 text-cream lg:pt-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-28">
                    <div className="lg:col-span-7">
                        <h2 className="poster text-[clamp(2.75rem,8.4vw,6rem)] text-balance">{contact.title}</h2>
                        <p className="mt-6 max-w-xl text-lg text-cream-soft">{contact.text}</p>
                        <p className="mt-8 text-base text-cream-soft">
                            {contact.note}:{' '}
                            <a
                                href={`mailto:${CONTACTS.email}`}
                                className="font-semibold text-cream underline decoration-red decoration-2 underline-offset-4 hover:decoration-cream"
                            >
                                {CONTACTS.email}
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 lg:col-span-5 lg:justify-self-end">
                        <a
                            href={CONTACTS.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group poster flex aspect-square w-44 flex-col items-center justify-center gap-2 rounded-full bg-red p-5 text-center text-xl leading-none tracking-normal text-cream transition-transform duration-300 hover:-rotate-12 sm:w-52 sm:text-2xl"
                        >
                            <Send size={32} aria-hidden="true" />
                            <span>{contact.telegram}</span>
                            <span className="flex items-center gap-1 text-base">
                                {CONTACTS.telegramHandle}
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </a>
                        <a
                            href={CONTACTS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group poster flex aspect-square w-44 flex-col items-center justify-center gap-2 rounded-full bg-cream p-5 text-center text-xl leading-none tracking-normal text-ink transition-transform duration-300 hover:-rotate-12 sm:w-52 sm:text-2xl"
                        >
                            <WhatsAppIcon size={32} />
                            <span>{contact.whatsapp}</span>
                            <span className="flex items-center gap-1 text-base">
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-ink text-cream-soft">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-cream/25 px-5 py-6 text-sm sm:flex-row lg:px-10">
                    <p>
                        © {new Date().getFullYear()} TimaSonr. {footer.rights}
                    </p>
                    <div className="flex items-center gap-5 text-cream">
                        <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-hot">
                            <Github size={20} />
                        </a>
                        <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-hot">
                            <Send size={20} />
                        </a>
                        <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-hot">
                            <WhatsAppIcon size={20} />
                        </a>
                        <a href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-hot">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
