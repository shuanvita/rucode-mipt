# RuCode Website

Проект RuCode с архитектурой **Feature-Sliced Design (FSD)**, Tailwind CSS v4 и набором модулей Nuxt (`@nuxt/image`, `@nuxt/fonts`, `@nuxt/scripts`, `nuxt-svgo`, `@nuxt/eslint`).

## Список страниц (актуально на 17.09.26)

1. https://rucode.net - Главная
2. https://rucode.net/award2025 - Премия 2025
3. https://rucode.net/award2026 - Премия 2026
4. https://aitesting.rucode.net/ - Тестирование по ИИ
5. https://rucode.net/ai_champ/ - Чемпионат по ИИ
6. https://rucode.net/champ/ - Чемпионат RuCode
7. https://rucode.net/consortium/ - Консорциум
8. https://rucode.net/mws/ - Навигатор
9. https://rucode.net/practikum/ - Практикум
10. https://rucode.net/mts/ - МТС
11. https://rucode.net/final-2024/ - Финал 2024г.
12. https://rucode.net/capital-2024/ - Столица RuCode

## Требования

- Node.js 22+
- npm (используется `package-lock.json`)

## Установка

```bash
npm install
```

## Команды

| Команда            | Описание                                                               |
| ------------------ | ---------------------------------------------------------------------- |
| `npm run dev`      | Проверка FSD (steiger) + запуск дев-сервера на `http://localhost:3000` |
| `npm run build`    | Сборка для продакшена                                                  |
| `npm run preview`  | Локальный предпросмотр продакшен-сборки                                |
| `npm run generate` | Статическая генерация сайта                                            |
| `npm run lint:fsd` | Проверка соответствия архитектуре FSD                                  |

## Структура проекта

Весь код лежит в `src/` (`srcDir: './src'`) и организован по слоям FSD:

```
src/
  app/            # инициализация приложения
    entrypoint/   # app.vue (Nuxt dir.app)
    routes/       # страницы-маршруты (Nuxt dir.pages)
    layouts/      # лейауты (Nuxt dir.layouts)
    styles/       # глобальные стили (main.css)
  pages/          # FSD-слой страниц (UI-композиция)
  widgets/        # Крупные самостоятельные блоки UI (Header, Sidebar и т.д.)
  features/       # пользовательские сценарии/действия (LoginForm, ToggleTheme и т.д.)
  entities/       # бизнес-сущности (User и т.д.) — модель + UI карточки сущности
  shared/         # переиспользуемое: ui-компоненты, ассеты
    ui/           # UI-кит (button, link, ...)
    icons/        # SVG-иконки
```

> Кастомные `dir` Nuxt заданы в `nuxt.config.ts`, чтобы совместить требования Nuxt с FSD.

## UI-компоненты

Компоненты из `src/shared/ui/**/*.vue` авто-импортируются с префиксом `ui` (`<UiAction>`). Авто-импорт ограничен `.vue`-файлами, поэтому барелл-файлы `index.ts` не конфликтуют.

```vue
<UiAction variant="primary">Купить</UiAction>
<UiAction to="https://nuxt.com" variant="secondary">Nuxt</UiAction>
```

## Иконки (nuxt-svgo)

SVG из `src/shared/icons` авто-импортируются как компоненты с префиксом `svg` (`arrow.svg` → `<SvgArrow>`). Размер и цвет задаётся через CSS (например, `class="w-6 h-6"`).

## Полезные ссылки

- [Документация Nuxt](https://nuxt.com/docs)
- [Feature-Sliced Design](https://feature-sliced.design)
