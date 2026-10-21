import { createContext, useContext, useEffect, useState } from 'react'

const KEY = 'learnsphere-progress'

const ProgressContext = createContext(null)

const load = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export function ProgressProvider({ children }) {
  const [done, setDone] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(done))
    } catch {
      return
    }
  }, [done])

  const keyOf = (courseId, lessonId) => courseId + ':' + lessonId

  const isDone = (courseId, lessonId) => done.includes(keyOf(courseId, lessonId))

  const toggleLesson = (courseId, lessonId) => {
    const key = keyOf(courseId, lessonId)
    setDone((list) => (list.includes(key) ? list.filter((item) => item !== key) : [...list, key]))
  }

  const completedCount = (course) =>
    course.lessons.filter((lesson) => isDone(course.id, lesson.id)).length

  const percentOf = (course) => Math.round((completedCount(course) / course.lessons.length) * 100)

  const nextLesson = (course) =>
    course.lessons.find((lesson) => !isDone(course.id, lesson.id)) || course.lessons[0]

  const resetCourse = (course) => {
    setDone((list) => list.filter((item) => !item.startsWith(course.id + ':')))
  }

  const value = { isDone, toggleLesson, completedCount, percentOf, nextLesson, resetCourse }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export const useProgress = () => useContext(ProgressContext)
