import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>
            Learn<span className="accent">Sphere</span>
          </strong>
          <p>Learn practical skills one small lesson at a time.</p>
        </div>
        <div className="footer-links">
          <Link to="/courses">All courses</Link>
          <Link to="/my-learning">My learning</Link>
        </div>
      </div>
      <p className="footer-note">
        Sample courses for demonstration. Progress is saved in your browser.
      </p>
    </footer>
  )
}
