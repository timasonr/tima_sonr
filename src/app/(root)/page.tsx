import { localeNames, locales } from '@/i18n/config';

/**
 * GitHub Pages не умеет серверные редиректы, поэтому "/" отдаёт страницу,
 * которая по языку браузера уходит на en/, ru/ или sr/.
 */
const SCRIPT = `var n=(navigator.language||'en').toLowerCase();var l='en';if(n.indexOf('sr')===0||n.indexOf('sh')===0)l='sr';else if(n.indexOf('ru')===0)l='ru';location.replace(l+'/');`;

export default function RootRedirectPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
            {locales.map((l, i) => (
                <span key={l}>
                    {i > 0 ? ' · ' : null}
                    <a href={`${l}/`}>{localeNames[l]}</a>
                </span>
            ))}
        </main>
    );
}
