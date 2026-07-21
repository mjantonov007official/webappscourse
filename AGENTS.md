# Project Rules

1. This is an engineering handbook, not a programming course.
2. Teach concepts before implementation.
3. Use pseudocode for programming logic.
4. Use real commands for terminal and server lessons.
5. Avoid large source-code examples.
6. Keep the interface dark, professional, and readable.
7. Prioritize lesson content and learning quality.
8. Use only HTML, CSS, and vanilla JavaScript.
9. Store learner progress in `localStorage`.
10. Do not add a backend unless the project owner explicitly changes the scope.
11. Do not introduce unnecessary dependencies.
12. All future lesson components must remain reusable.
13. Accessibility and responsive behavior must be preserved.
14. AI-generated work must be reviewed for correctness and clarity.
15. The complete curriculum data is the source of truth for roadmap structure.
16. Curriculum IDs and slugs must remain stable after release.
17. Lesson progress must not be reset when metadata changes.
18. Planned content must be described honestly and must not be counted as completed content.
19. Atlas Commerce must remain conceptual and must not become a required app build.
20. Authored lessons should use `data/lessons/*.js` and `window.LessonContentRegistry`.
21. Reusable lesson UI belongs in `js/lesson-renderer.js`, `css/interactions.css`, and `css/quiz.css`.
22. Learners should only be able to mark authored lessons complete after attempting the quiz and reaching the summary.
23. Preserve the original HTTP lesson body unless the project owner explicitly asks to replace it.
24. Terminal commands must be real, explained, and represented as simulated browser output only.
25. Commands must never auto-execute in the browser.
26. Destructive commands require clear warnings and recovery guidance.
27. Do not suggest `chmod 777` as a general fix.
28. Do not suggest `kill -9` as the default process action.
29. Do not tell learners to disable SSH host-key checks.
30. Do not expose secrets, private keys, tokens, API keys, or real credentials in examples.
31. Observation comes before modification, especially on remote servers.
32. Preserve progress and stable lesson IDs.
33. Teach Git as a change-management system, not command memorization.
34. Explain repository state before Git commands.
35. Do not recommend destructive Git commands casually.
36. Do not use force push as a routine solution.
37. Shared history should not be rewritten without clear justification and warnings.
38. Secrets pushed to a remote must be treated as compromised.
39. AI must not commit, push, merge, delete branches, force push, or rewrite history automatically.
40. Keep Git interactions reusable, keyboard-accessible, and static.
