import { notFound } from 'next/navigation';
import { getMessages, isLocale } from '@/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Cases from '@/components/Cases';
import Process from '@/components/Process';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

export const dynamicParams = false;

export default async function LandingPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    const t = getMessages(lang);

    return (
        <>
            <Header locale={lang} nav={t.nav} />
            <main>
                <Hero hero={t.hero} metrics={t.metrics} />
                <Services services={t.services} />
                <Cases cases={t.cases} />
                <Process process={t.process} />
                <About about={t.about} />
                <Faq faq={t.faq} />
                <Contact contact={t.contact} footer={t.footer} />
            </main>
        </>
    );
}
