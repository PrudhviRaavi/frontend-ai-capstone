# FE-03: AI-Assisted Workflow Comparison

## Objective

This experiment compares two approaches to building a responsive settings form using GitHub Copilot in VS Code. Round 1 used a vague prompt, while Round 2 used a detailed prompt with requirements, constraints, file references, and verification instructions.

## Round 1 — Vague Prompt

Prompt: "Build a settings form for my React project with some useful fields, validation, and a save button. Make it look good and work properly."

Copilot independently inspected the project and created a settings page with profile fields, notification preferences, validation, responsive styling, and a success message.

The implementation changed src/App.tsx, src/App.css, and src/index.css. Git reported 421 insertions and 347 deletions.

During verification, the first production build failed because FormEvent needed a type-only import. Copilot corrected it, and both the build and lint checks passed. Code review also revealed that name validation allowed a single-character name and the role options did not match the intended choices.

## Round 2 — Precise Prompt

The second prompt specified the fields, validation rules, accessibility requirements, responsive behavior, implementation constraints, and verification commands. Copilot was instructed to inspect the project, present a plan, and wait for approval before coding.

It changed the same three files, with 454 insertions and 342 deletions.

The implementation enforced the two-character name minimum, used the requested role options, displayed errors only after submission, and included aria-invalid and aria-describedby. Its success message clearly stated that no data was saved to a server.

Both npm run build and npm run lint passed without a reported correction.

## Comparison and Lessons

The precise prompt produced a closer match to the requested behavior and made the implementation easier to review against explicit acceptance criteria. The vague prompt gave Copilot more creative freedom but required more manual checking to identify missing requirements.

One important AI mistake caught in Round 1 was the missing minimum-length validation for the name field.

The precise approach was more effective for this task because correctness and accessibility mattered more than giving the AI freedom to decide the requirements. However, the second implementation still deserves review, particularly around type assertions and revalidation after submission.

## Conclusion

For future frontend work, I will define expected behavior, constraints, accessibility requirements, and verification steps before asking AI to implement a feature. I will still inspect generated code, test edge cases, and verify the final Git diff rather than treating successful builds as proof of complete correctness.
