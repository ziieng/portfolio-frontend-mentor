import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Fylo from './pages/fylo'
import Insure from './pages/insure'
import Manage from './pages/manage'
import Contact from './pages/contact'
import Bookmark from './pages/bookmark'
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
