import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Tasks from './pages/Tasks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se acessar direto o localhost, joga pro Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Nossas rotas */}
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App