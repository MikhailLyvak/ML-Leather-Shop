# Команда Claude для ML Shop

## Агенти (`.claude/agents/`)

| Агент | Роль | Редагує код? |
|---|---|---|
| **orchestrator** | Тімлід: розбиває задачу, роздає агентам, зводить результат | так (дрібниці) |
| **architect** | Пише специфікації в `docs/specs/`, модель даних, server actions, структура | лише спеки |
| **frontend-engineer** | Реалізує фічі за специфікацією й правилами `.cursor/rules` | так |
| **copywriter** | Українські тексти в стилі бренду ML, alt-тексти, мета-описи | лише `content.ts` |
| **seo-specialist** | Метадані, JSON-LD, семантика, sitemap/robots | так (на запит) |
| **design-qa** | Звіряє сторінку з макетами на ширині 1920 і 390 | ні |
| **perf-a11y-auditor** | Core Web Vitals, зображення, шрифти, WCAG 2.2 AA | ні |
| **test-engineer** | Налаштування тестів (пропонує Vitest), тести для server actions | так |
| **code-reviewer** | Фінальний рев'ю диффу, вердикт APPROVE / CHANGES REQUESTED | ні |

Субагенти не можуть запускати інших субагентів, тому оркестратор працює двома способами:
- `claude --agent orchestrator` — уся сесія стає оркестратором;
- або у звичайній сесії: `/ml-feature <опис фічі>`.

## Скіли (`.claude/skills/`)

| Команда | Що робить |
|---|---|
| `/ml-feature <опис>` | Повний цикл: спека → реалізація → паралельний рев'ю → виправлення → фінальна перевірка |
| `/write-spec <назва>` | Специфікація за шаблоном `spec-before-implementation` |
| `/review-changes` | Паралельний рев'ю незакомічених змін кількома агентами |
| `/verify [--build]` | Prettier, ESLint, TypeScript і, за потреби, збірка |
| `/seo-audit [url]` | Скрипт технічного SEO-аудиту + ручний чекліст |
| `/visual-qa [шлях]` | Скриншоти 1920/390 у `.tmp-design/` і порівняння з макетами |
| `/landing-block <назва>` | Створення або нормалізація блоку лендингу за конвенціями |

## Хуки (`.claude/settings.json` → `.claude/hooks/`)

| Подія | Скрипт | Що робить |
|---|---|---|
| SessionStart | `session-context.mjs` | Коротко вводить Claude в контекст: git, наявні спеки, джерела правди, команда |
| PreToolUse (Edit/Write) | `guard-files.mjs` | Блокує редагування `.env*`, `.next`, `node_modules`, lock-файлу та макетів, а також макети в `public/` |
| PreToolUse (Bash) | `guard-bash.mjs` | Блокує `git reset --hard`, force push, `rm -rf` поза `.next`/`.tmp-design`, читання `.env` |
| PostToolUse (Edit/Write) | `post-edit.mjs` | Prettier + `eslint --fix` для зміненого файлу, далі перевірка конвенцій ML: `@/`-імпорти, `isString`, маршрути з `route-href`, `mlStorageKey`, без default export, `next/image`, `"use server"`, `"use client"` не на сторінках |
| Stop | `stop-typecheck.mjs` | Якщо змінювався `src/`, перед завершенням запускає `tsc --noEmit` і повертає помилки Claude |
| Notification | osascript | Сповіщення macOS, коли Claude чекає на відповідь |

Щоб вимкнути перевірку конвенцій для одного рядка, додайте коментар `// ml-ignore-convention`.
Особисті налаштування — у `.claude/settings.local.json` (не потрапляє в git).
