import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

export default function LessonList({ course, activeId }) {
  const { isDone } = useProgress()

  return (
    <ol className="lesson-list">
      {course.lessons.map((lesson, index) => {
        const done = isDone(course.id, lesson.id)
        return (
          <li key={lesson.id}>
            <Link
              to={`/courses/${course.id}/lessons/${lesson.id}`}
              className={lesson.id === activeId ? 'active' : ''}
            >
              <span className={'step ' + (done ? 'done' : '')}>{done ? '✓' : index + 1}</span>
              <span className="lesson-title">{lesson.title}</span>
              <small>{lesson.duration}</small>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
