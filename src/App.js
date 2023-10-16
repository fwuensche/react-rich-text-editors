import Navbar from './components/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Lexical from './components/lexical/Lexical'
import Quill from './components/quill/Quill'

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quill" element={<Quill />} />
          <Route path="/lexical" element={<Lexical />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
