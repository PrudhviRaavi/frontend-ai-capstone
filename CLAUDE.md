# AI Coding Instructions

## Technology Stack
- React.js with TypeScript
- Tailwind CSS
- Node.js and Express.js
- PostgreSQL

## Coding Conventions
- Write clean and reusable code.
- Use functional React components.
- Follow consistent naming conventions.
- Use TypeScript wherever possible.
- Build responsive interfaces.
- Follow accessibility best practices.
- Review AI-generated code before accepting it.

## Development Guidelines
- Keep components modular.
- Avoid unnecessary dependencies.
- Explain significant code changes.
## Project-Specific Rules

- For settings forms, validate that full names contain at least two non-whitespace characters after trimming.
- Display field validation errors only after submission. Use `aria-invalid` and `aria-describedby` to associate each visible error with its input.
- Do not claim that form data is persisted when no backend API or database integration exists. Use clear frontend-only success messaging.
- Use the exact role options and other field values specified in the feature requirements. Do not invent alternatives.
- Before completing a frontend feature, run `npm run build` and `npm run lint`, fix introduced errors, and review the final Git diff.
