import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Create from './Create.jsx'
import TraerDatos from './TraerDatos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Create></Create>
    <TraerDatos></TraerDatos>
  </StrictMode>,
)
