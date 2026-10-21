import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCourses } from '../api'
import { CATEGORIES, LEVELS } from '../data/courses'
import useAsync from '../hooks/useAsync'
import CourseCard from '../components/CourseCard'
import CourseGridSkeleton from '../components/CourseGridSkeleton'

export default function Courses() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All')
  const { data: courses, loading } = useAsync(getCourses, [])

  const category = params.get('category') || 'All'

  const setCategory = (value) => {
    if (value === 'All') setParams({})
    else setParams({ category: value })
  }

  const visible = useMemo(() => {
    if (!courses) return []
    const text = query.trim().toLowerCase()
    return courses.filter((course) => {
      if (category !== 'All' && course.category !== category) return false
      if (level !== 'All' && course.level !== level) return false
      if (!text) return true
      return (
        course.title.toLowerCase().includes(text) ||
        course.summary.toLowerCase().includes(text) ||
        course.category.toLowerCase().includes(text)
      )
    })
  }, [courses, query, category, level])

  const reset = () => {
    setQuery('')
    setLevel('All')
    setParams({})
  }

  return (
    <div className="container page">
      <div className="page-head">
        <h1>All courses</h1>
        <p>Find the right course and start learning today.</p>
      </div>

      <div className="filters">
        <input
          className="input"
          placeholder="Search courses..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          className="input select"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="All">All levels</option>
          {LEVELS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="chips">
        {['All', ...CATEGORIES].map((item) => (
          <button
            key={item}
            className={item === category ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <CourseGridSkeleton count={6} />
      ) : visible.length ? (
        <>
          <p className="result-count">
            Showing {visible.length} {visible.length === 1 ? 'course' : 'courses'}
          </p>
          <div className="grid">
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty">
          <h3>No courses found</h3>
          <p>Try a different search or clear your filters.</p>
          <button className="btn primary" onClick={reset}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
