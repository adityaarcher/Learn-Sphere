import { Link } from 'react-router-dom'
import { getCourses } from '../api'
import useAsync from '../hooks/useAsync'
import { useProgress } from '../context/ProgressContext'
import CourseCard from '../components/CourseCard'
import CourseGridSkeleton from '../components/CourseGridSkeleton'

export default function MyLearning() {
  const { data: courses, loading } = useAsync(getCourses, [])
  const { completedCount, percentOf } = useProgress()

  const started = courses ? courses.filter((course) => completedCount(course) > 0) : []
  const inProgress = started.filter((course) => percentOf(course) < 100)
  const finished = started.filter((course) => percentOf(course) === 100)

  return (
    <div className="container page">
      <div className="page-head">
        <h1>My learning</h1>
        <p>Pick up right where you left off.</p>
      </div>

      {loading && <CourseGridSkeleton />}

      {!loading && !started.length && (
        <div className="empty">
          <h3>Nothing started yet</h3>
          <p>Open a course and mark a lesson complete to see it here.</p>
          <Link to="/courses" className="btn primary">
            Browse courses
          </Link>
        </div>
      )}

      {inProgress.length > 0 && (
        <>
          <h2 className="subhead">In progress ({inProgress.length})</h2>
          <div className="grid">
            {inProgress.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      )}

      {finished.length > 0 && (
        <>
          <h2 className="subhead">Completed ({finished.length})</h2>
          <div className="grid">
            {finished.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
