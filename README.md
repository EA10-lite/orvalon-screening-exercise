# Frontend Developer Screening Exercises

A comprehensive React application showcasing three frontend development exercises: LinkedIn UI replication, Interactive Todo List, and Product Listing with API integration.

## Overview

This application serves as a portfolio of frontend development skills, demonstrating proficiency in UI/UX design, state management, API integration, and responsive web development. The project is structured as a single-page application with multiple exercise modules accessible through a central home screen.

## Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.18
- **Routing**: React Router DOM 7.10.1
- **State Management**: Zustand 5.0.9
- **Data Fetching**: TanStack React Query 5.90.12
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 7.2.4
- **Linting**: ESLint 9.39.1

## Project Structure

```text
src/
├── pages/
│   ├── home/          # Home screen with exercise navigation
│   ├── linkedin/      # Exercise 1: LinkedIn UI replication
│   ├── todo/          # Exercise 2: Interactive Todo List
│   └── products/      # Exercise 3: Product Listing with API
├── App.tsx            # Main app component with routing
└── main.tsx           # Application entry point
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (package manager)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd orvalon-screening-exercise
```

1. Install dependencies:

```bash
pnpm install
```

1. Start the development server:

```bash
pnpm dev
```

1. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Exercises

### Exercise 1: LinkedIn UI Replication

**Objective**: Replicate a LinkedIn UI mockup pixel-perfectly with full responsiveness.

**Features**:

- Fully responsive design (Desktop, Tablet, Mobile)
- Pixel-perfect UI replication
- Mobile-first approach

**Route**: `/linkedin`

### Exercise 2: Interactive Todo List

**Objective**: Build an interactive todo application with state management and persistence.

**Features**:

- Add, delete, and toggle task completion
- Filter tasks by status (all, active, completed)
- Local storage persistence
- State management with React hooks

**Route**: `/todo`

### Exercise 3: Product Listing with API Fetch

**Objective**: Integrate with external API and display dynamic data.

**Features**:

- Fetch products from FakeStore API
- Grid layout with responsive design
- Search functionality
- Loading states and error handling
- Empty state handling

**Route**: `/products`

## Design Decisions

### Mobile-First Approach

All components are designed with mobile devices as the primary target, then enhanced for larger screens using Tailwind's responsive breakpoints.

### Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigation support
- Focus management

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Component-based architecture
- Clean, maintainable code structure

## Trade-offs

1. **State Management**: Using Zustand for simplicity and performance, though Redux could be used for more complex state requirements.

2. **Styling**: Tailwind CSS chosen for rapid development and consistency, though CSS Modules or styled-components could provide more component isolation.

3. **Data Fetching**: React Query handles caching and error states efficiently, reducing boilerplate compared to manual fetch implementations.

## Known Limitations

- All exercises are contained within a single application (as per requirements)
- Maximum of 5 pages total (Home + 3 exercises + potential additional pages)
- Local storage used for Todo persistence (no backend integration)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Ensure all console errors are resolved before submission
- Code is fully linted and follows project conventions
- All routes are accessible and functional
- Responsive design tested across multiple device sizes
