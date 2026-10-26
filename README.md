# TimaSonr — лендинг

Next.js 16 (статический экспорт), RU/EN. Тексты — в `src/data/content.ts`.

## Разработка

```bash
npm install
npm run dev      # http://localhost:3000/ru
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub и запушьте `site` в ветку `main` (корень репозитория = эта папка).
2. На GitHub: **Settings → Pages → Build and source → GitHub Actions**.
3. Каждый push в `main` запускает `.github/workflows/deploy.yml`: сборка `npm run build` → папка `out` → публикация.

Адрес сайта:
- репозиторий `username.github.io` → `https://username.github.io/`
- любой другой репозиторий `name` → `https://username.github.io/name/`

`basePath` (`/name`) workflow подставляет сам через `NEXT_PUBLIC_BASE_PATH`.
Для кастомного домена оставьте переменную пустой (уберите шаг "Set base path" или задайте пустое значение).

Локальная проверка сборки как на Pages:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/name'; npm run build   # результат в out/
```

## Фото

Положите вырезанное фото (PNG с прозрачным фоном) в `public/portrait.png`.
