import { Button } from '@mui/joy'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <Button variant={path === '/quill' ? 'solid' : 'outlined'} onClick={() => navigate('/quill')}>
        Quill
      </Button>
      <Button variant={path === '/lexical' ? 'solid' : 'outlined'} onClick={() => navigate('/lexical')}>
        Lexical
      </Button>
    </div>
  )
}

export default Navbar
