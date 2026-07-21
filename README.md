# Modern Web Application Engineering in the AI Era

An interactive engineering handbook for learning how modern web applications work as complete systems. The project is a static website that teaches engineering concepts, architecture, debugging, deployment, operations, security awareness, scalability, and AI-assisted engineering judgment.

## Current Phase

Phase 5: Git, GitHub, and managing change.

## Main Features

- Complete first-edition roadmap: 16 parts, 40 chapters, 156 lessons.
- Forty-three fully authored interactive lessons, including all of Chapter 1.1, all of Part 2, all of Part 3, and the preserved HTTP lesson.
- Part 2 complete: Operating System Fundamentals, Terminal and Shell Fundamentals, and Remote Access and Package Tools.
- Part 3 complete: Version Control Foundations and GitHub and Collaboration.
- Planned lesson preview pages with meaningful metadata.
- Dynamic lesson loading through `lesson.html?lesson=<slug>`.
- Data-driven authored lesson rendering from `data/lessons/*.js`.
- Reusable interactions: accordions, step flows, comparison tables, decision challenges, labs, quizzes, and command blocks.
- Terminal interaction system: command anatomy, simulated output, path navigation, file operation simulation, pipe builder, process explorer, log investigation, SSH flow, package comparison, dependency graph, and risk review.
- Command glossary at `commands.html`.
- Git practice simulator and Git-specific repository-state visualizations.
- Git command glossary entries with repository effects and recovery guidance.
- Cross-platform command notes for Linux, macOS, Windows PowerShell, Windows Command Prompt, WSL, and Git Bash where relevant.
- Command risk labels: read-only, low-risk modification, destructive, privileged, network access, and package installation.
- Curriculum search and filters.
- Sidebar navigation for the full roadmap.
- Previous and next lesson logic calculated from curriculum order.
- Progress, quiz attempts, lab checks, bookmarks, scroll, and visited sections stored locally in `localStorage`.
- Atlas Commerce conceptual reference page.
- Development validation page at `curriculum-check.html`.

## Technology Used

- HTML
- CSS
- Vanilla JavaScript
- JavaScript data files
- Browser `localStorage`

No backend, framework, database, authentication, or build step is required.

## Run Locally

Use any static file server from the project folder. If Python is available:

```bash
python -m http.server 8000
```

Or use Node without installing project dependencies:

```bash
npx serve
```

Open:

```text
http://localhost:8000
```

## Project Structure

```text
.
|-- index.html
|-- handbook.html
|-- lesson.html
|-- atlas-commerce.html
|-- curriculum-check.html
|-- commands.html
|-- css/
|-- js/
|   |-- bookmark-manager.js
|   |-- command-glossary.js
|   |-- curriculum-data.js
|   |-- curriculum-renderer.js
|   |-- curriculum-validator.js
|   |-- lesson-renderer.js
|   |-- lesson-loader.js
|   |-- navigation.js
|   |-- progress.js
|   |-- sidebar.js
|   |-- storage.js
|   `-- app.js
|-- data/
|   |-- curriculum.js
|   |-- lessons/
|   |-- command-glossary.js
|   `-- sample-lessons.js
|-- docs/
|   |-- interactive-components.md
|   |-- lesson-authoring-guide.md
|   |-- terminal-content-guide.md
|   |-- git-content-guide.md
|   |-- curriculum-guide.md
|   `-- atlas-commerce.md
`-- AGENTS.md
```

## Curriculum Data Format

`data/curriculum.js` defines the source roadmap and generates complete lesson metadata. `js/curriculum-data.js` provides shared helpers for reading parts, chapters, lessons, totals, previous/next links, lesson URLs, and status labels.

Each generated lesson contains:

- `id`
- `slug`
- `partId`
- `chapterId`
- `position`
- `globalPosition`
- `title`
- `summary`
- `learningObjectives`
- `difficulty`
- `estimatedMinutes`
- `status`
- `topics`
- `prerequisites`
- `relatedLessons`
- `atlasCommerceFocus`
- `plannedInteractions`
- `labType`
- `contentKey`

## Progress Calculation

Learner progress counts only fully authored lessons.

For Phase 3:

```text
Interactive lessons completed: 0 to 43 of 43
Curriculum roadmap: 166 lessons
```

Planned lessons do not reduce learner progress and cannot be marked complete.

## Progress Storage

Progress is saved under one key:

```text
engineeringHandbookState
```

The app migrates older `engineeringHandbookProgress` data into the versioned state key without deleting the legacy value. The object stores lesson progress, completion, quiz attempts, quiz scores, lab completion, bookmarks, visited sections, last lesson, scroll position, timestamps, and expanded navigation groups.

Reset local progress from the browser console:

```javascript
localStorage.removeItem("engineeringHandbookState")
```

## Add a Part

Add a new part entry to the `source` array in `data/curriculum.js`. Keep the ID stable after release.

## Add a Chapter

Add a chapter tuple inside the correct part. Chapter order follows its position in the array.

## Add a Lesson

Add a lesson title inside the correct chapter. The generator creates metadata, IDs, slugs, relationships, estimated time, Atlas Commerce focus, and planned interaction hints.

For a lesson that needs custom metadata, update the generator rules or add a targeted override.

## Change Lesson Order

Move the lesson title in `data/curriculum.js`. The previous/next navigation and generated prerequisites will update from curriculum order. Avoid changing IDs for lessons that already have learner progress.

## Add a Fully Authored Lesson

1. Add or preserve the lesson in `data/curriculum.js`.
2. Set its generated `status` to `complete`.
3. Add a stable `contentKey`.
4. Add a lesson data file in `data/lessons/` that registers `window.LessonContentRegistry[slug]`.
5. Ensure the file is loaded by `lesson.html` and `curriculum-check.html`.
6. Verify progress, quiz gating, previous/next, sidebar, search, bookmarks, and validation.

## Add Terminal Commands Safely

Terminal command records must include a command, description, platform label, command anatomy, expected simulated output, output explanation, risk label, safe-use note, common error, recovery note, and try-it prompt.

Destructive and privileged commands require explicit warnings. Do not recommend `chmod 777` as a general fix, do not make `kill -9` the default, do not disable SSH host-key checks, and never include real credentials, private keys, tokens, or API keys.

## Add Git Lessons Safely

Git command records must explain repository effects: working files, staging area, local history, branch labels, remote repository, or recovery behavior. High-risk commands such as `git reset --hard`, `git clean -fd`, `git branch -D`, and `git push --force` require strong warnings and recovery guidance.

Teach the shared mental model: Working Directory -> Staging Area -> Local Repository -> Remote Repository. Also explain fetch and pull as remote synchronization operations.

## Validate Curriculum Data

Open:

```text
curriculum-check.html
```

The validator checks IDs, slugs, references, positions, summaries, objectives, difficulty, status, prerequisites, related lessons, estimated time, content keys, topics, interaction types, lab types, and complete lesson registry content.

## Planned Lessons

Planned lessons are visible roadmap items. They show objectives, topics, Atlas Commerce focus, planned interactions, and lab type, but they cannot be completed until authored.

## Static Deployment

Deploy the files to any static host such as GitHub Pages, Netlify, Hostinger static hosting, or Cloudflare Pages.

## Known Limitations

- Forty-three full interactive lessons are authored.
- Planned lesson bodies are roadmap previews.
- Search is client-side metadata search.
- Progress is local to the browser and is not synced across devices.
