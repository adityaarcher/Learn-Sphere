import { Link } from 'react-router-dom'
import { getFeaturedCourses } from '../api'
import { CATEGORIES, COURSES } from '../data/courses'
import useAsync from '../hooks/useAsync'
import CourseCard from '../components/CourseCard'
import CourseGridSkeleton from '../components/CourseGridSkeleton'

const STEPS = [
  ['1', 'Pick a course', 'Browse by topic and level and find something that fits your goal.'],
  ['2', 'Learn in small steps', 'Short lessons with real examples you can finish in minutes.'],
  ['3', 'Track your progress', 'Mark lessons complete and pick up exactly where you left off.']
]

export default function Home() {
  const { data: featured, loading } = useAsync(getFeaturedCourses, [])

  const lessonTotal = COURSES.reduce((sum, course) => sum + course.lessons.length, 0)

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="pill">🚀 Learn at your own pace</span>
          <h1>
            Learn skills that <span className="gradient-text">actually matter</span>
          </h1>
          <p>
            Practical courses in web development, programming, data and design. Short lessons, clear
            examples and progress you can see.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn primary">
              Explore courses
            </Link>
            <Link to="/my-learning" className="btn ghost">
              My learning
            </Link>
          </div>

          <div className="stats">
            <div>
              <b>{COURSES.length}</b>
              <span>Courses</span>
            </div>
            <div>
              <b>{lessonTotal}</b>
              <span>Lessons</span>
            </div>
            <div>
              <b>{CATEGORIES.length}</b>
              <span>Topics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Top rated courses</h2>
          <Link to="/courses" className="link">
            View all →
          </Link>
        </div>
        {loading ? (
          <CourseGridSkeleton />
        ) : (
          <div className="grid">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Browse by topic</h2>
        </div>
        <div className="topic-grid">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              to={'/courses?category=' + encodeURIComponent(category)}
              className="topic"
            >
              <strong>{category}</strong>
              <span>{COURSES.filter((course) => course.category === category).length} courses</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>How it works</h2>
        </div>
        <div className="steps">
          {STEPS.map(([number, title, text]) => (
            <div key={number} className="step-card">
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
