import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import ProgressBar from './ProgressBar'

export default function CourseCard({ course }) {
  const { percentOf } = useProgress()
  const percent = percentOf(course)

  return (
    <Link to={'/courses/' + course.id} className="card course-card">
      <div
        className="card-banner"
        style={{ background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})` }}
      >
        <span className="card-icon">{course.icon}</span>
        <span className="badge">{course.level}</span>
      </div>

      <div className="card-body">
        <span className="eyebrow">{course.category}</span>
        <h3>{course.title}</h3>
        <p>{course.summary}</p>

        <div className="meta">
          <span>📚 {course.lessons.length} lessons</span>
          <span>⏱ {course.duration}</span>
          <span>⭐ {course.rating}</span>
        </div>

        {percent > 0 && (
          <div className="card-progress">
            <ProgressBar value={percent} />
            <small>{percent}% complete</small>
          </div>
        )}
      </div>
    </Link>
  )
}
