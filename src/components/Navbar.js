import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <nav className="flex gap-3 my-3">
      <Link className={`btn-light ${path === '/' ? 'bg-gray-200' : ''}`} to="/">
        Home
      </Link>
      <Link className={`btn-light ${path === '/quill' ? 'bg-gray-200' : ''}`} to="/quill">
        Quill
      </Link>
      <Link className={`btn-light ${path === '/lexical' ? 'bg-gray-200' : ''}`} to="/lexical">
        Lexical
      </Link>
    </nav>
  )
}

export default Navbar
