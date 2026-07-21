# Curriculum Guide

## Philosophy

This handbook teaches engineering thinking, not programming syntax. Lessons should explain systems through concepts, diagrams, workflows, pseudocode, small focused examples, and terminal commands where command-line work is the subject.

## Learning Progression

The first edition moves from foundations to production work:

1. Computing and system foundations
2. Operating systems and terminal
3. Git and GitHub
4. Programming concepts without language dependence
5. Internet and networking
6. How the web works
7. Frontend engineering and user experience
8. Databases and data systems
9. Software engineering and architecture
10. Backend and API engineering
11. Identity and application security
12. Application services and business workflows
13. Infrastructure, Docker, and deployment
14. Operations, performance, and reliability
15. AI-assisted software engineering
16. Business systems, accessibility, legal awareness, and career growth

## Metadata Fields

Each lesson should have stable identifiers, a clear title, meaningful summary, learning objectives, difficulty, estimated time, topics, prerequisites, related lessons, Atlas Commerce focus, planned interactions, lab type, and content status.

## Difficulty Rules

- `beginner`: introduces vocabulary, one system, few prerequisites.
- `intermediate`: connects systems, introduces tradeoffs, includes production behavior.
- `advanced`: covers distributed behavior, failure handling, scaling, operations, or complex decisions.

## Estimated-Time Rules

- Beginner lessons usually take 20-30 minutes.
- Intermediate lessons usually take 30-45 minutes.
- Advanced lessons usually take 40-60 minutes.
- Observation labs may add 10-15 minutes.

Totals are calculated from lesson metadata, not manually maintained.

## Topic Taxonomy

Topics are controlled slugs such as `computers`, `terminal`, `git`, `dns`, `http`, `frontend`, `databases`, `architecture`, `backend`, `apis`, `security`, `payments`, `queues`, `docker`, `deployment`, `monitoring`, `performance`, `reliability`, and `ai-assisted-development`.

Do not create duplicate variants for the same concept.

## Planned Interactions

Use interaction values that match the lesson:

- Terminal lessons: `terminal-demo`, `command-practice`
- Web and browser lessons: `step-flow`, `browser-observation`
- Architecture lessons: `architecture-diagram`, `decision-simulator`
- Security lessons: `failure-scenario`, `debugging-checklist`
- Concept lessons: `expandable-concepts`, `quiz`
- AI lessons: `ai-output-review`, `comparison-table`

## Lab Types

Labs are observation and reasoning activities, not large coding assignments. Use values such as `none`, `terminal-observation`, `browser-network-observation`, `architecture-review`, `log-investigation`, `failure-analysis`, `ai-output-review`, `pseudocode-design`, and `system-mapping`.

## Prerequisite Rules

Prerequisites must reference existing lesson IDs. A lesson cannot require itself. Keep prerequisites lightweight so learners are guided without being trapped.

## Content Production Workflow

1. Pick a planned lesson from the roadmap.
2. Review its summary, objectives, topics, and Atlas Commerce focus.
3. Draft concept-first content.
4. Register authored content in `data/lessons/*.js` using `window.LessonContentRegistry[slug]`.
5. Add diagrams, terminal commands, pseudocode, or interactions only when they serve the lesson.
6. Mark the lesson `complete` only after the authored page, quiz gating, bookmarks, and progress behavior are tested.
7. Run `curriculum-check.html`.

Chapter 1.1 is the first complete chapter. It contains six authored foundation lessons, while the preserved HTTP request lesson remains the reference for the original static lesson body.

Phase 4 completes Part 2 with three authored chapters: Operating System Fundamentals, Terminal and Shell Fundamentals, and Remote Access and Package Tools. Command names should be discoverable through curriculum search and the command glossary.

Phase 5 completes Part 3 with Version Control Foundations and GitHub and Collaboration. Git commands should be discoverable through search and the glossary, and Git lessons should emphasize repository state, review, recovery, releases, CI, and AI-assisted workflows.
