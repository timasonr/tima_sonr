import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

// При unoptimized-картинках Next не добавляет basePath сам (важно для GitHub Pages).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const CANDIDATES = ['portrait.png', 'portrait.webp', 'portrait.jpg'];

/**
 * Диск с портретом автора. Файл: public/portrait.jpg (или .png / .webp).
 * Если файла нет, показывается заглушка с инициалами.
 */
export default function Portrait({ alt }: { alt: string }) {
    const file = CANDIDATES.find((f) => fs.existsSync(path.join(process.cwd(), 'public', f)));

    return (
        <div className="anim-disc relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-ink lg:max-w-[26rem]">
            {file ? (
                <Image
                    src={`${BASE_PATH}/${file}`}
                    alt={alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 18rem, 14rem"
                    className="rounded-full object-cover object-[center_12%]"
                />
            ) : (
                <div
                    aria-hidden="true"
                    className="poster flex h-full w-full items-center justify-center text-[clamp(7rem,18vw,12rem)] leading-none text-cream"
                >
                    TS
                </div>
            )}
        </div>
    );
}
