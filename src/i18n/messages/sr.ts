import { ASTROTOTAL_URL } from '@/data/site';
import type { Content } from '@/i18n/types';

export const sr: Content = {
    meta: {
        title: 'TimaSonr — konverzija i prodaja kroz sajtove, MVP i automatizaciju',
        description:
            'Povećavam konverziju i prodaju kroz sajtove, MVP i automatizaciju procesa. Preuzimam sve: od ideje i dizajna do lansiranja i merenja.',
    },
    nav: {
        services: 'Šta radim',
        cases: 'Projekti',
        process: 'Proces',
        faq: 'FAQ',
        cta: 'Razgovarajmo',
    },
    hero: {
        eyebrow: 'Developer i produkt inženjer',
        before: 'Povećavam ',
        accent: 'konverziju i prodaju',
        after: ' kroz sajtove, MVP i automatizaciju procesa',
        sub: 'Pravim sajtove koji pretvaraju saobraćaj u prijave, pokrećem MVP za nedelje, ne mesece, i skidam ručnu rutinu sa biznisa. Jedna osoba: strategija, dizajn, kod, lansiranje.',
        cta: 'Razgovarajmo o projektu',
        ctaSecondary: 'Pogledaj projekte',
        tags: ['Sajtovi', 'MVP', 'Automatizacija'],
    },
    metrics: [
        { value: '15+', label: 'pokrenutih projekata' },
        { value: '3 ned.', label: 'od ideje do lansiranja MVP-a' },
        { value: '10 č/ned', label: 'uštede na rutini' },
    ],
    services: {
        title: 'Šta radim za vaš biznis',
        subtitle: 'Tri smera, jedan cilj — više prodaje uz manje troškova.',
        includes: 'Šta ulazi',
        format: 'Format',
        items: [
            {
                id: 'sites',
                title: 'Sajtovi i landing stranice za konverziju',
                pain: 'Imate saobraćaj, a malo prijava? Sajt treba da prodaje, ne samo da izgleda lepo.',
                items: [
                    'Struktura i ponuda po vašoj publici',
                    'UX/UI dizajn i responzivni layout',
                    'Brzo učitavanje i SEO osnova',
                    'Analitika i A/B hipoteze za rast',
                ],
                format: 'Projekat od 1–3 nedelje',
            },
            {
                id: 'mvp',
                title: 'MVP i veb servisi',
                pain: 'Imate ideju, ali nemate vreme ni budžet za dugu izradu? Proverićemo hipotezu na pravim korisnicima.',
                items: [
                    'Obrada hipoteze i jezgra proizvoda',
                    'Pun ciklus: dizajn, backend, frontend, deploy',
                    'Prijava, plaćanja, korisnički paneli',
                    'Lansiranje i plan rasta posle prvih podataka',
                ],
                format: 'Lansiranje za 3–6 nedelja',
            },
            {
                id: 'automation',
                title: 'Automatizacija procesa',
                pain: 'Tim tone u ručnoj rutini? Automatizujem prijave, izveštaje, komunikaciju i proračune.',
                items: [
                    'Telegram botovi i integracije sa CRM',
                    'Automatizacija prijava, izveštaja, mailinga',
                    'AI agenti i LLM tokovi za vaše zadatke',
                    'Parsing, API i veze između servisa',
                ],
                format: 'Od 1 nedelje, plaćanje po rezultatu',
            },
        ],
    },
    cases: {
        title: 'Projekti',
        subtitle: 'Projekti gde sam vodio ceo proizvod — od ideje do rezultata koji radi.',
        task: 'Zadatak',
        solution: 'Rešenje',
        result: 'Rezultat',
        visit: 'Otvori sajt',
        items: [
            {
                id: 'astrototal',
                title: 'AstroTotal',
                tag: 'Veb servis · od aprila 2025',
                stack: ['Next.js', 'Python', 'Flask', 'Supabase'],
                task: 'Pretvoriti složene astrološke proračune u jasan servis sa ličnim prognozama, koji ne treba ručno održavati.',
                solution:
                    'Napravio sam brz frontend na Next.js i fleksibilan API na Pythonu, projektovao relacijsku bazu i algoritme za dinamičko generisanje sadržaja.',
                result:
                    'Servis radi sam: korisnik dobija ličnu prognozu za sekunde, bez tima u pozadini.',
                metrics: [
                    { value: '400+', label: 'sačinjenih prognoza' },
                    { value: '+30%', label: 'konverzija u registraciju' },
                ],
                url: ASTROTOTAL_URL,
            },
            {
                id: 'dice-rabbit',
                title: 'Dice Rabbit',
                tag: 'AI proizvod · dec. 2025 — jan. 2026',
                stack: ['React 19', 'Next.js', 'Supabase', 'Gemini API'],
                task: 'Pokrenuti AI platformu za preradu i stilsku adaptaciju teksta koja čuva smisao originala.',
                solution:
                    'Sagradio sam celu infrastrukturu od nule: precizan prompt inženjering za promenu tona bez gubitka konteksta i čuvanje sesija u bazi.',
                result: 'Radni proizvod sastavljen i lansiran za 3 nedelje — jedna osoba, pun ciklus.',
                metrics: [
                    { value: '3 ned.', label: 'od ideje do lansiranja' },
                    { value: '80%', label: 'korisnika se vraća' },
                ],
                url: null,
            },
            {
                id: 'mimeon',
                title: 'Mimeon',
                tag: 'Automatizacija · od septembra 2025',
                stack: ['TypeScript', 'Web Extensions API', 'Multi-agent'],
                task: 'Osloboditi korisnika rutinskih radnji u pregledaču uz pomoć veštačke inteligencije.',
                solution:
                    'Projektovao sam multi-agent arhitekturu: nezavisni AI modeli analiziraju stranicu, planiraju korake i izvršavaju lance akcija u pregledaču.',
                result:
                    'Složeni višekoračni zadaci idu automatski, pa korisnik troši minute umesto sati.',
                metrics: [
                    { value: '5 č/ned', label: 'uštede na rutini' },
                    { value: '9', label: 'scenarija automatizacije' },
                ],
                url: null,
            },
            {
                id: 'nisam-stranac',
                title: 'Nisam Stranac',
                tag: 'Automatizacija · od 2023',
                stack: ['Python', 'PostgreSQL', 'Telegram Bot API'],
                task: 'Skalirati projekat učenja srpskog jezika gde su grupe i učenike morali da skupljaju ručno.',
                solution:
                    'Automatizovao sam formiranje grupa i vođenje nastave preko Telegram bota i baze podataka.',
                result: 'Projekat raste bez većeg operativnog opterećenja tima.',
                metrics: [
                    { value: '700', label: 'učenika u sistemu' },
                    { value: '−40%', label: 'ručnih operacija' },
                ],
                url: null,
            },
        ],
    },
    process: {
        title: 'Kako ćemo raditi',
        subtitle: 'Transparentan proces bez iznenađenja: uvek znate šta se dešava i kada stiže rezultat.',
        steps: [
            {
                title: 'Brif i cilj',
                text: 'Prolazimo biznis, publiku i metrike. Definišemo uspeh: prijave, prodaja, sati uštede.',
            },
            {
                title: 'Struktura i prototip',
                text: 'Sklapam strukturu, ponudu i prototip. Usaglašavamo pre razvoja da ne prepravljamo.',
            },
            {
                title: 'Razvoj',
                text: 'Dizajn, kod, integracije. Pokazujem međurezultate svakih nekoliko dana.',
            },
            {
                title: 'Lansiranje i mere',
                text: 'Lansiram, povezujem analitiku, gledamo brojke i doterujemo ono što stvarno diže prodaju.',
            },
        ],
    },
    about: {
        title: 'O meni',
        headline: 'Preuzimam ceo proizvod — od arhitekture do rezultata u brojkama.',
        paragraphs: [
            'Ja sam indie developer i produkt inženjer. Ne pišem samo kod po specifikaciji, već odgovaram za rezultat: projektujem arhitekturu i baze, pravim interfejs, postavljam u oblak i optimizujem po poslovnim metrikama.',
            'Koristim savremene alate i AI razvoj da brzo proverim hipoteze i isporučim pouzdane proizvode sam, bez naduvanih timova i suvišnih sastanaka.',
        ],
        stackTitle: 'Radni stek',
    },
    faq: {
        title: 'Česta pitanja',
        items: [
            {
                q: 'Koliko košta rad i koliko traje?',
                a: 'Zavisi od zadatka. Landing obično 1–3 nedelje, MVP 3–6 nedelja, automatizacija od nedelje. Posle kratkog brifa dam tačnu cenu i rok, pre početka rada.',
            },
            {
                q: 'Gde da počnem ako imam samo ideju?',
                a: 'Pišite mi na Telegram ili WhatsApp. Na prvom razgovoru prođemo cilj, publiku i minimalnu verziju proizvoda koju vredi prvu lansirati.',
            },
            {
                q: 'Šta treba da dostavim?',
                a: 'Opis biznisa i cilja, pristup postojećim materijalima (ako ih ima) i povratnu informaciju na etapama. Ostalo preuzimam ja.',
            },
            {
                q: 'Garantujete rast prodaje?',
                a: 'Konkretne brojke ne obećavam, zavise od proizvoda i saobraćaja. Ali unapred fiksiramo metrike, povezujemo analitiku i doterujemo sajt po podacima, ne po osećaju.',
            },
            {
                q: 'Šta se dešava posle lansiranja?',
                a: 'Ostajem na vezi: ispravljam greške, pomažem sa doradama i novim hipotezama. Uslove podrške dogovaramo odmah.',
            },
        ],
    },
    contact: {
        title: 'Hajde da podignemo vašu prodaju',
        text: 'Napišite ukratko o zadatku na Telegramu ili WhatsApp-u — odgovaram u toku dana i predložim odakle da krenemo.',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        note: 'Ili na mejl',
    },
    footer: { rights: 'Sva prava zadržana.' },
};
