
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Invention from './pages/Invention'
import Longitude from './pages/Longitude'
import Palm from './pages/Palm'
import President from './pages/President'
import Wonder from './pages/Wonder'
import NumberTheory from './pages/NumberTheory'
import Messi from './pages/Messi'

function App() {
 
  return (
    <>
     <div>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/invention' element={<Invention/>}/>
      <Route path='/longitude' element={<Longitude/>}/>
      <Route path='/palm' element={<Palm/>}/>
      <Route path='/president' element={<President/>}/>
      <Route path='/wonder' element={<Wonder/>}/>
      <Route path='/numberTheory' element={<NumberTheory/>}/>
      <Route path='/messi' element={<Messi/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
