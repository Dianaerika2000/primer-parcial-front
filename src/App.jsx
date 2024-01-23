import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/auth/LoginPage'
import Dashboard from './pages/dashboard'
import RegisterPage from './pages/auth/RegisterPage'
import DiagramPage from './pages/Diagram/DiagramPage'
import NavBarMenu from './components/navBarMenu'
import RoomPage from './pages/Room/RoomPage'


function App() {
  // options
  let arNavBarOption = [
    { option: 'bi bi-question-circle', to: '/ayuda' },
    { option: 'bi bi-gear', to: '/configuracion' },
  ];

  return (
    <BrowserRouter>
      <NavBarMenu opciones={arNavBarOption}/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/diagram' element={<DiagramPage/>}/>
        <Route path='/room/:id' element={<RoomPage/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
