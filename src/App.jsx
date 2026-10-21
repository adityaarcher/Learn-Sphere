import { Route, Routes } from 'react-router-dom'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import LessonPage from './pages/LessonPage'
import MyLearning from './pages/MyLearning'
import NotFound from './pages/NotFound'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
