# Task 4 - Frontend Framework Basics (React)

This repository is the final implementation for the EduTech internship Task 4.

## Requirement Mapping

1. Create components
- Implemented reusable components in src/components:
	- Badge.jsx
	- ComponentCard.jsx
	- CounterDemo.jsx
	- ThemeToggle.jsx

2. Implement Props
- Parent component passes data and callback props to child components.
- UI is driven by dynamic props like title, purpose, propsUsed, theme, and step.

3. Implement State
- Parent state in App.jsx:
	- theme
	- activeCategory
	- favorites
- Local state in CounterDemo via useState for interactive counter behavior.

4. Component Library Deliverable
- The app acts as a small component library showcase with filtering and favorite marking.
- Includes a requirement coverage section and interview preparation section.

## Features Added

- Category filter for presentational/stateful components
- Favorite toggle for components
- Theme switching (Sunset/Lagoon)
- Counter demo with configurable step
- Responsive design for desktop and mobile
- Interview prep notes:
	- Virtual DOM vs Real DOM
	- Why use React

## Tech Stack

- React
- Vite
- CSS

## Run Project

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm run lint
```

## Project Structure

```text
src/
	components/
		Badge.jsx
		ComponentCard.jsx
		CounterDemo.jsx
		ThemeToggle.jsx
	App.jsx
	App.css
	index.css
```

## Submission Checklist

- Source code included
- Component library included
- Screenshot files included in public/screenshots
- README included
- No paid tools used

This project is ready for GitHub submission.

## Screenshots

The following files are included with the repository:

- public/screenshots/image.png
- public/screenshots/image-copy.png
- public/screenshots/image-copy-2.png
- public/screenshots/image-copy-3.png
- public/screenshots/image-copy-4.png
