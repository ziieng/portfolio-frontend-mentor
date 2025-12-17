import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Fylo from './pages/Fylo'
import Insure from './pages/Insure'
import Manage from './pages/Manage'
import Contact from './pages/Contact'
import Bookmark from './pages/Bookmark'
function App() {

  return (
    <Routes>
      <Route path = "/" element={ <Home /> } />
      <Route path = "/portfolio" element={ <Portfolio /> } />
      <Route path='/portfolio/bookmark' element={ <Bookmark /> } />
      <Route path='/portfolio/fylo' element={ <Fylo /> } />
      <Route path='/portfolio/insure' element={ <Insure /> } />
      <Route path='/portfolio/manage' element={ <Manage /> } />
      <Route path = "/contact" element={ <Contact /> } />
    </Routes>
  )
}

export default App
