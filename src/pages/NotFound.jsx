import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container empty">
      <h1 className="big-404">404</h1>
      <h3>Page not found</h3>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn primary">
        Go home
      </Link>
    </div>
  )
}
