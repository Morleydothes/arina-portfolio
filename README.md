# Arina Portfolio

Фотопортфолио на Next.js с публичным сайтом на Vercel и встроенным Sanity Studio.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000), а Studio после настройки Sanity будет доступна на [http://localhost:3000/studio](http://localhost:3000/studio).

## Переменные окружения

Скопируй `.env.example` в `.env.local` и заполни:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_REVALIDATE_SECRET=
```

`NEXT_PUBLIC_SANITY_PROJECT_ID` и `NEXT_PUBLIC_SANITY_DATASET` нужны сайту и Studio.

`SANITY_REVALIDATE_SECRET` нужен для вебхука, который будет обновлять сайт без ручного деплоя.

## Что уже подключено

- Встроенный `Sanity Studio` на маршруте `/studio`
- Схемы: `category`, `photo`, `aboutPage`, `siteSettings`
- Фолбэк на локальные данные, если Sanity ещё не настроен
- ISR с `revalidate = 60`
- API-маршрут для revalidation: `/api/revalidate`

## Что нужно сделать в Sanity

1. Создать Sanity-проект.
2. Взять `project ID` и `dataset`.
3. Добавить эти значения в локальные `.env.local` и в переменные окружения проекта на Vercel.
4. Разрешить в Sanity CORS для домена Vercel.
5. Настроить webhook на `POST /api/revalidate` с заголовком `x-revalidate-secret`.

После этого контент можно будет редактировать прямо через `/studio`, а сайт начнёт читать данные из CMS.
