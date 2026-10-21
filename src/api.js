import { COURSES } from './data/courses'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getCourses() {
  await wait(700)
  return COURSES
}

export async function getFeaturedCourses() {
  await wait(500)
  return COURSES.slice()
    .sort((a, b) => b.rating - a.rating || b.students - a.students)
    .slice(0, 3)
}

export async function getCourse(id) {
  await wait(500)
  const course = COURSES.find((item) => item.id === id)
  if (!course) throw new Error('Course not found')
  return course
}
