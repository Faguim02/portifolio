import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeRouter from './routes/HomeRouter'
import AllProjects from './routes/AllProjects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeRouter/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
