import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inventario from './assets/components/Inventario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inventario />
  </StrictMode>,
)
