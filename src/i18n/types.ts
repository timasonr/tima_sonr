export type Metric = { value: string; label: string };

export type CaseItem = {
    id: string;
    title: string;
    tag: string;
    stack: string[];
    task: string;
    solution: string;
    result: string;
    metrics: Metric[];
    url: string | null;
};

export type ServiceItem = {
    id: 'sites' | 'mvp' | 'automation';
    title: string;
    pain: string;
    items: string[];
    format: string;
};

export type Content = {
    meta: { title: string; description: string };
    nav: { services: string; cases: string; process: string; faq: string; cta: string };
    hero: {
        eyebrow: string;
        before: string;
        accent: string;
        after: string;
        sub: string;
        cta: string;
        ctaSecondary: string;
        tags: string[];
    };
    metrics: Metric[];
    services: { title: string; subtitle: string; includes: string; format: string; items: ServiceItem[] };
    cases: {
        title: string;
        subtitle: string;
        task: string;
        solution: string;
        result: string;
        visit: string;
        items: CaseItem[];
    };
    process: { title: string; subtitle: string; steps: { title: string; text: string }[] };
    about: { title: string; headline: string; paragraphs: string[]; stackTitle: string };
    faq: { title: string; items: { q: string; a: string }[] };
    contact: { title: string; text: string; telegram: string; whatsapp: string; note: string };
    footer: { rights: string };
};
