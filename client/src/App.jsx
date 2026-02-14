import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
