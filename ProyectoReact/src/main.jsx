import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Create from './Create.jsx'
import TraerDatos from './TraerDatos.jsx'
import EditarDato from './EditarDato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/listar' element={<TraerDatos />} />
        <Route path='/editar/:id' element={<EditarDato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
