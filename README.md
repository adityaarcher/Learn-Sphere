# LearnSphere - React Education Website

A responsive learning platform built with React. Browse courses, open lessons, mark them complete and track your progress.

## Features

- Reusable components: Navbar, CourseCard, LessonList, ProgressBar, Loader, CourseGridSkeleton
- React Hooks: useState, useEffect, useContext and custom hooks (useAsync, useTheme)
- Loading states while course data loads
- Page switching without refresh using React Router
- Dynamic content: courses, course details and lessons rendered from the URL
- Search, category and level filters
- Lesson progress saved in the browser
- Dark and light theme
- Responsive layout for mobile, tablet and desktop

## Getting Started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5174

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  main.jsx
  App.jsx
  index.css
  api.js
  data/courses.js
  hooks/
    useAsync.js
    useTheme.js
  context/
    ProgressContext.jsx
  components/
    Navbar.jsx
    Footer.jsx
    ScrollToTop.jsx
    Loader.jsx
    ProgressBar.jsx
    CourseCard.jsx
    CourseGridSkeleton.jsx
    LessonList.jsx
  pages/
    Home.jsx
    Courses.jsx
    CourseDetail.jsx
    LessonPage.jsx
    MyLearning.jsx
    NotFound.jsx
```

## About the Data

Courses, instructors, ratings and student counts are sample data stored in `src/data/courses.js`. `src/api.js` returns them after a short delay to show loading states, so it can be swapped for a real API later.

