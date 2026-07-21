# Lesson Authoring Guide

Authored lessons live in `data/lessons/*.js` and register themselves on `window.LessonContentRegistry` by slug. The curriculum in `data/curriculum.js` remains the roadmap source of truth; a lesson becomes available when its slug is listed in `completeLessonSlugs` and its content file is loaded.

## Required Fields

Each reusable lesson record should include:

- `id`, `slug`, `title`, and `summary` matching curriculum metadata.
- `introduction`, `learningObjectives`, `scenario`, `whyThisExists`, and `problemItSolves`.
- `keyConcepts` as `[term, explanation]` pairs.
- `interactiveBlocks` using supported component types.
- `architectureDiagram`, `atlasCommerceExample`, `seniorEngineerThinking`, `commonMistakes`, `debuggingGuide`, `securityNotes`, `performanceNotes`, and `productionNotes`.
- `aiPromptExamples`, `handsOnLab`, `miniChallenge`, `quiz`, `summaryPoints`, `relatedLessons`, and `officialResources`.

## Completion Rules

A complete lesson can be marked complete only after the learner has attempted the quiz and reached the `summary` section. Completion, quiz state, visited sections, lab checks, bookmarks, and scroll position are stored in `engineeringHandbookState`.

## Terminal Command Standards

Command-based lessons must explain what the command does, why engineers use it, command structure, important options, expected simulated output, common errors, safe usage, and recovery notes. Browser interactions must never execute real shell commands.

Use platform labels from this set: `Linux`, `macOS`, `Windows PowerShell`, `Windows Command Prompt`, `WSL`, and `Git Bash`.

Use risk labels from this set: `Read-only`, `Low-risk modification`, `Destructive`, `Privileged`, `Network access`, and `Package installation`.

Destructive commands such as `rm`, recursive removal, ownership changes, and forceful process signals need direct warnings and recovery guidance. Do not present `rm -rf`, `chmod 777`, `sudo`, or `kill -9` as routine beginner fixes.

SSH examples must use safe example domains or documentation IP ranges. Do not tell learners to disable host-key checks. Package-manager examples must distinguish updating indexes, installing packages, updating installed packages, and updating project dependencies.

Expected output must be labeled as simulated. Command copy feedback may say `Command copied`, but copied commands must not be tracked as analytics.

## Git Lesson Standards

Git lessons should explain repository state before commands. Use the working directory, staging area, local repository, and remote repository model consistently, while clarifying that it is simplified.

Git command blocks must include `repositoryEffect`. Risk labels may include `Read-only`, `Changes working files`, `Changes staging area`, `Creates history`, `Changes branch`, `Changes local history`, `Changes remote repository`, `Potentially destructive`, and `Recovery command`.

Remote repository examples must use safe placeholder URLs. Merge-conflict examples must explain conflict markers and require testing after resolution. Shared history should not be rewritten without clear justification and warnings.

## Preserved HTTP Lesson

`How an HTTP Request Works` keeps its original hand-authored HTML body. Its data file exists for registry validation and quiz/progress consistency, but `LessonRenderer` intentionally does not replace the static content for that slug.
