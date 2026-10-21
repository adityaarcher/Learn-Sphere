import { Link, useParams } from 'react-router-dom'
import { getCourse } from '../api'
import useAsync from '../hooks/useAsync'
import { useProgress } from '../context/ProgressContext'
import Loader from '../components/Loader'
import ProgressBar from '../components/ProgressBar'
import LessonList from '../components/LessonList'

const Block = ({ block }) => {
  if (block.type === 'code') {
    return (
      <pre className="code">
        <code>{block.text}</code>
      </pre>
    )
  }
  if (block.type === 'tip') {
    return (
      <div className="tip">
        <strong>💡 Tip</strong>
        <p>{block.text}</p>
      </div>
    )
  }
  return <p>{block.text}</p>
}

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const { data: course, loading, error } = useAsync(() => getCourse(courseId), [courseId])
  const { isDone, toggleLesson, percentOf } = useProgress()

  if (loading) return <Loader text="Loading lesson..." />

  const index = course ? course.lessons.findIndex((item) => item.id === lessonId) : -1

  if (error || index === -1) {
    return (
      <div className="container empty">
        <h3>Lesson not found</h3>
        <p>This lesson does not exist.</p>
        <Link to="/courses" className="btn primary">
          Back to courses
        </Link>
      </div>
    )
  }

  const lesson = course.lessons[index]
  const previous = course.lessons[index - 1]
  const next = course.lessons[index + 1]
  const done = isDone(course.id, lesson.id)
  const percent = percentOf(course)

  return (
    <div className="container lesson-layout">
      <article className="lesson">
        <Link to={'/courses/' + course.id} className="back">
          ← {course.title}
        </Link>
        <span className="eyebrow">
          Lesson {index + 1} of {course.lessons.length} · {lesson.duration}
        </span>
        <h1>{lesson.title}</h1>

        <div className="lesson-content">
          {lesson.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <button
          className={'btn full-mobile ' + (done ? 'success' : 'primary')}
          onClick={() => toggleLesson(course.id, lesson.id)}
        >
          {done ? '✓ Completed (click to undo)' : 'Mark as complete'}
        </button>

        {percent === 100 && (
          <div className="tip celebrate">
            <strong>🎉 Course complete!</strong>
            <p>
              You finished every lesson in {course.title}.{' '}
              <Link to="/courses">Find your next course</Link>
            </p>
          </div>
        )}

        <div className="lesson-nav">
          {previous ? (
            <Link className="btn ghost" to={`/courses/${course.id}/lessons/${previous.id}`}>
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="btn primary" to={`/courses/${course.id}/lessons/${next.id}`}>
              Next lesson →
            </Link>
          ) : (
            <Link className="btn ghost" to={'/courses/' + course.id}>
              Back to course
            </Link>
          )}
        </div>
      </article>

      <aside className="panel sticky">
        <h3>Course content</h3>
        <ProgressBar value={percent} />
        <p className="progress-text">{percent}% complete</p>
        <LessonList course={course} activeId={lesson.id} />
      </aside>
    </div>
  )
}
