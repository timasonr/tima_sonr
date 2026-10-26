import { ASTROTOTAL_URL } from '@/data/site';
import type { Content } from '@/i18n/types';

export const en: Content = {
    meta: {
        title: 'TimaSonr — more conversions and sales through websites, MVPs and automation',
        description:
            'I increase conversions and sales through websites, MVPs and process automation. End-to-end: from idea and design to launch and measurement.',
    },
    nav: {
        services: 'Services',
        cases: 'Cases',
        process: 'Process',
        faq: 'FAQ',
        cta: 'Discuss a project',
    },
    hero: {
        eyebrow: 'Developer & product engineer',
        before: 'I increase ',
        accent: 'conversions and sales',
        after: ' through websites, MVPs and process automation',
        sub: 'I build websites that turn traffic into leads, launch MVPs in weeks instead of months, and remove manual routine from your business. One person: strategy, design, code, launch.',
        cta: 'Discuss a project',
        ctaSecondary: 'View cases',
        tags: ['Websites', 'MVP', 'Automation'],
    },
    metrics: [
        { value: '15+', label: 'projects launched' },
        { value: '3 wks', label: 'from idea to MVP launch' },
        { value: '10 h/wk', label: 'saved on routine' },
    ],
    services: {
        title: 'What I do for your business',
        subtitle: 'Three directions, one goal — more sales at lower cost.',
        includes: 'What is included',
        format: 'Format',
        items: [
            {
                id: 'sites',
                title: 'Conversion-focused websites and landing pages',
                pain: 'Getting traffic but few leads? A website should sell, not just look good.',
                items: [
                    'Structure and offer tailored to your audience',
                    'UX/UI design and responsive layout',
                    'Fast loading and SEO foundation',
                    'Analytics and A/B hypotheses for growth',
                ],
                format: 'Project of 1–3 weeks',
            },
            {
                id: 'mvp',
                title: 'MVPs and web services',
                pain: 'Have an idea but no time or budget for long development? Let us test it on real users.',
                items: [
                    'Hypothesis and product core definition',
                    'Full cycle: design, backend, frontend, deployment',
                    'Auth, payments, user dashboards',
                    'Launch and a growth plan based on first data',
                ],
                format: 'Launch in 3–6 weeks',
            },
            {
                id: 'automation',
                title: 'Process automation',
                pain: 'Is your team drowning in manual routine? I automate leads, reports, communications and calculations.',
                items: [
                    'Telegram bots and CRM integrations',
                    'Automation of leads, reports, mailings',
                    'AI agents and LLM workflows for your tasks',
                    'Parsing, APIs and service integrations',
                ],
                format: 'From 1 week, pay for results',
            },
        ],
    },
    cases: {
        title: 'Cases',
        subtitle: 'Projects where I owned the whole product — from idea to a working result.',
        task: 'Challenge',
        solution: 'Solution',
        result: 'Result',
        visit: 'Visit website',
        items: [
            {
                id: 'astrototal',
                title: 'AstroTotal',
                tag: 'Web service · since Apr 2025',
                stack: ['Next.js', 'Python', 'Flask', 'Supabase'],
                task: 'Turn complex astrological calculations into a clear service with personalized forecasts that needs no manual support.',
                solution:
                    'Built a fast Next.js frontend and a flexible Python API, designed the relational database and calculation algorithms for dynamic content generation.',
                result:
                    'The service runs on its own: users get a personal forecast in seconds without any team involvement.',
                metrics: [
                    { value: '400+', label: 'forecasts generated' },
                    { value: '+30%', label: 'sign-up conversion' },
                ],
                url: ASTROTOTAL_URL,
            },
            {
                id: 'dice-rabbit',
                title: 'Dice Rabbit',
                tag: 'AI product · Dec 2025 — Jan 2026',
                stack: ['React 19', 'Next.js', 'Supabase', 'Gemini API'],
                task: 'Launch an AI platform for text rewriting and stylistic adaptation that preserves the original meaning.',
                solution:
                    'Built the whole infrastructure from scratch: precise prompt engineering to shift tone without losing context, and database-backed user sessions.',
                result: 'A working product built and launched in 3 weeks — one person, full cycle.',
                metrics: [
                    { value: '3 wks', label: 'from idea to launch' },
                    { value: '80%', label: 'of users return' },
                ],
                url: null,
            },
            {
                id: 'mimeon',
                title: 'Mimeon',
                tag: 'Automation · since Sep 2025',
                stack: ['TypeScript', 'Web Extensions API', 'Multi-agent'],
                task: 'Free users from routine browser actions with the help of AI.',
                solution:
                    'Designed a multi-agent architecture where independent AI models analyze a page, plan steps and execute action chains right in the browser.',
                result:
                    'Complex multi-step tasks run automatically, so users spend minutes instead of hours.',
                metrics: [
                    { value: '5 h/wk', label: 'saved on routine' },
                    { value: '9', label: 'automation scenarios' },
                ],
                url: null,
            },
            {
                id: 'nisam-stranac',
                title: 'Nisam Stranac',
                tag: 'Automation · since 2023',
                stack: ['Python', 'PostgreSQL', 'Telegram Bot API'],
                task: 'Scale a Serbian language learning project where groups and students had to be organized manually.',
                solution:
                    'Automated group formation and student management with a Telegram bot and a database.',
                result: 'The project grows without increasing the operational load on the team.',
                metrics: [
                    { value: '700', label: 'students in the system' },
                    { value: '−40%', label: 'manual operations' },
                ],
                url: null,
            },
        ],
    },
    process: {
        title: 'How we will work',
        subtitle: 'A transparent process with no surprises: you always know what is happening and when to expect results.',
        steps: [
            {
                title: 'Brief and goal',
                text: 'We go through your business, audience and metrics, and define success: leads, sales, hours saved.',
            },
            {
                title: 'Structure and prototype',
                text: 'I put together the structure, offer and a prototype. We agree on it before development to avoid rework.',
            },
            {
                title: 'Development',
                text: 'Design, code, integrations. I share intermediate results every few days.',
            },
            {
                title: 'Launch and measurement',
                text: 'I launch, connect analytics, review the numbers and improve what actually drives sales.',
            },
        ],
    },
    about: {
        title: 'About',
        headline: 'I own the product end-to-end — from architecture to results in numbers.',
        paragraphs: [
            'I am an indie developer and product engineer. I do not just code to a spec, I own the outcome: I design the architecture and databases, build the interface, deploy to the cloud and optimize for business metrics.',
            'I use modern tools and AI-assisted development to test hypotheses quickly and ship reliable products solo, without bloated teams or endless calls.',
        ],
        stackTitle: 'Working stack',
    },
    faq: {
        title: 'FAQ',
        items: [
            {
                q: 'How much does it cost and how long does it take?',
                a: 'It depends on the task. A landing page usually takes 1–3 weeks, an MVP 3–6 weeks, automation from a week. After a short brief I will give you an exact price and timeline before work starts.',
            },
            {
                q: 'Where do I start if I only have an idea?',
                a: 'Message me on Telegram or WhatsApp. On the first call we will go over the goal, audience and the minimal version of the product worth launching first.',
            },
            {
                q: 'What do I need to provide?',
                a: 'A description of your business and goal, access to existing materials (if any), and feedback at each stage. I take care of the rest.',
            },
            {
                q: 'Do you guarantee sales growth?',
                a: 'I do not promise specific numbers, they depend on the product and traffic. But we define metrics upfront, set up analytics and improve the site based on data, not feelings.',
            },
            {
                q: 'What happens after launch?',
                a: 'I stay in touch: fixing bugs, helping with improvements and new hypotheses. We discuss support terms upfront.',
            },
        ],
    },
    contact: {
        title: 'Let us grow your sales',
        text: 'Briefly describe your task in Telegram or WhatsApp — I will reply within a day and suggest where to start.',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        note: 'Or by email',
    },
    footer: { rights: 'All rights reserved.' },
};
