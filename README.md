# Frontend AI Engineering Capstone

## Overview
This project is a frontend engineering capstone developed as part of the FlyRank Frontend AI Engineering track. The goal is to build a modern, responsive, and user-focused web application that demonstrates strong frontend engineering practices, clean architecture, and practical integration with an AI-driven product mindset. The project is intended to showcase the ability to design and deliver a production-ready user experience using a scalable full-stack stack.

## Project Goals
- Build a polished frontend experience with a clear user value proposition.
- Apply modern React and TypeScript patterns in a real-world project.
- Create a maintainable, modular codebase with reusable components.
- Establish a practical backend and database foundation for data-driven features.
- Demonstrate engineering discipline through documentation, structure, and iteration.

## Key Features
- Responsive and accessible user interfaces.
- Component-driven frontend architecture.
- Modern styling and design consistency using Tailwind CSS.
- API-driven communication with a Node.js and Express.js backend.
- Persistent data handling with PostgreSQL.
- A foundation for future AI-powered product enhancements.

## Technology Stack
- React.js
- TypeScript
- Tailwind CSS
- Node.js
- Express.js
- PostgreSQL

## Project Structure
The repository is currently being organized to support the capstone application. The structure will evolve as the frontend, backend, and database layers are implemented.

- src/ — frontend application source files
- server/ — backend API layer and application logic
- database/ — database configuration, models, and migrations
- README.md — project overview and setup documentation

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm or yarn
- PostgreSQL
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend-ai-capstone
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Install backend dependencies if the API is separated into its own package:
   ```bash
   npm install
   ```
4. Configure your environment variables.
5. Start the development environment.

### Environment Variables
Create a `.env` file in the project root or the relevant service directory and define the following values as needed:

```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/frontend_ai_capstone
```

Update the values to match your local PostgreSQL setup and deployment environment.

### Running the Project
Use the project scripts appropriate to the application setup, for example:

```bash
npm run dev
```

If the backend and frontend are separated, run them independently in their respective directories.

## Development Workflow
- Keep UI components small, reusable, and well-structured.
- Follow TypeScript best practices for maintainability and safety.
- Use Tailwind CSS consistently for styling and layout.
- Validate API contracts before integrating backend features.
- Keep the database schema and migrations organized as the project grows.
- Update documentation as features and workflows evolve.

## Current Status
This project is in its initial setup and documentation phase. The foundation is being established to support the capstone build and the implementation of the core product experience.

## Future Scope
- Build the core user-facing product flows.
- Add AI-enhanced functionality and UX improvements.
- Improve accessibility, testing, and performance.
- Prepare the application for deployment and production readiness.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Author
Prudhvi