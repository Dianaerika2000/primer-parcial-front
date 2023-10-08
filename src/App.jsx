import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/auth/LoginPage'
import Dashboard from './pages/dashboard'
import RegisterPage from './pages/auth/RegisterPage'
import DiagramPage from './pages/Diagram/DiagramPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/diagram' element={<DiagramPage/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
