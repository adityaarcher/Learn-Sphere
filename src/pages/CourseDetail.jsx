import { Link, useParams } from 'react-router-dom'
import { getCourse } from '../api'
import useAsync from '../hooks/useAsync'
import { useProgress } from '../context/ProgressContext'
import Loader from '../components/Loader'
import ProgressBar from '../components/ProgressBar'
import LessonList from '../components/LessonList'

export default function CourseDetail() {
  const { courseId } = useParams()
  const { data: course, loading, error } = useAsync(() => getCourse(courseId), [courseId])
  const { percentOf, completedCount, nextLesson, resetCourse } = useProgress()

  if (loading) return <Loader text="Loading course..." />

  if (error) {
    return (
      <div className="container empty">
        <h3>Course not found</h3>
        <p>This course does not exist or may have been removed.</p>
        <Link to="/courses" className="btn primary">
          Back to courses
        </Link>
      </div>
    )
  }

  const percent = percentOf(course)
  const completed = completedCount(course)
  const next = nextLesson(course)
  const started = completed > 0

  return (
    <>
      <section
        className="course-hero"
        style={{ background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})` }}
      >
        <div className="container">
          <Link to="/courses" className="back">
            ← All courses
          </Link>
          <div className="course-hero-body">
            <span className="course-hero-icon">{course.icon}</span>
            <div>
              <span className="badge">{course.category}</span>
              <h1>{course.title}</h1>
              <p>{course.description}</p>
              <div className="meta light">
                <span>👤 {course.instructor}</span>
                <span>⭐ {course.rating}</span>
                <span>👥 {course.students.toLocaleString()} learners</span>
                <span>⏱ {course.duration}</span>
                <span>📶 {course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container detail-layout">
        <div>
          <section className="panel">
            <h2>What you will learn</h2>
            <ul className="outcomes">
              {course.outcomes.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>Lessons ({course.lessons.length})</h2>
            <LessonList course={course} />
          </section>
        </div>

        <aside className="panel sticky">
          <h3>Your progress</h3>
          <ProgressBar value={percent} />
          <p className="progress-text">
            {completed} of {course.lessons.length} lessons complete ({percent}%)
          </p>
          <Link to={`/courses/${course.id}/lessons/${next.id}`} className="btn primary full">
            {percent === 100 ? 'Review course' : started ? 'Continue learning' : 'Start course'}
          </Link>
          {started && (
            <button className="btn ghost full" onClick={() => resetCourse(course)}>
              Reset progress
            </button>
          )}
        </aside>
      </div>
    </>
  )
}
