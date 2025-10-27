Week 3: React.js, JSX & Tailwind CSS – Front-End Project
Project Overview

This project is a responsive React application demonstrating component architecture, state management, React hooks, API integration, and styling with Tailwind CSS.
It includes:
Reusable components: Navbar, Footer, Card, Button, Layout
Task Manager: Add, delete, complete, and filter tasks
API Data Explorer: Fetch and display data from a JSON file
Dark/Light Mode: Toggle between themes with persistence using localStorage
Responsive Design: Works on mobile, tablet, and desktop

## Features & Functionality
1. Component
Navbar: Navigation with links and theme toggle
Footer: Copyright and basic links
Card: Displays content in a boxed layout
Button: Reusable with multiple variants

2. Task Manager
Add new tasks
Mark tasks as completed
Delete tasks
Filter tasks (All / Active / Completed)
Tasks persisted in localStorage

3. API Data Explorer
Fetches data from a local JSON file (CORS-friendly)
Search feature
Pagination
Loading & error states

4. Dark/Light Mode
Default light mode, toggleable via button
Selection persists across page reloads
Uses Tailwind CSS dark: classes

## Tech Stack
React.js (via Vite)
JSX
Tailwind CSS v4
React Router v6
Custom React Hooks (useLocalStorage)

## Setup Instructions
Clone the repository:
git clone <your-repo-url>
cd <repo-folder>

## Install dependencies:
npm install

## Start the development server:
npm run dev
Open your browser at http://localhost:5173

## Screenshots
### Home Page
![Home Page](screenshot/screenshots/home.png)

### API Data Explorer
![API Data Explorer](screenshot/screenshots/api.png)

### Task Manager
![Task Manager](screenshot/screenshots/tasks.png)


## Deployment
This project can be deployed to Vercel, Netlify, or GitHub Pages. After deployment, add the live URL to your README.

## Notes

Tailwind’s dark mode is enabled using class strategy.
Tasks and theme selections are persisted in localStorage.
All components are fully responsive.