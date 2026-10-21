import { useEffect, useState } from 'react'

const getInitial = () => {
  try {
    const saved = localStorage.getItem('learnsphere-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    return 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('learnsphere-theme', theme)
    } catch {
      return
    }
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return [theme, toggle]
}
