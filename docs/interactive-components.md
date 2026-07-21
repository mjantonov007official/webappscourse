# Interactive Components

The reusable lesson renderer in `js/lesson-renderer.js` supports a small component vocabulary that can be reused across future authored lessons.

## Supported Blocks

- `step-flow`: ordered buttons with a detail panel for workflow reasoning.
- `comparison`: a responsive comparison table for classifying concepts.
- `decision`: a multiple-choice scenario with immediate feedback.
- Accordions: generated from key concept definitions.
- Architecture diagrams: simple node-and-arrow diagrams from data.
- Pseudocode walkthroughs: code blocks with a line-highlighting control.
- Command blocks: copyable command examples with explanation, output, and safety notes.
- Observation labs: guided local exercises with a completion checkbox.
- Quizzes: five or more questions with score persistence and completion gating.

## Styling

Shared interaction styles are in `css/interactions.css`; quiz-specific refinements are in `css/quiz.css`. Components use existing dark handbook tokens from `css/variables.css` and keep card radius at the project default.
