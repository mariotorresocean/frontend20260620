import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JogoDaVelha from './JogoDaVelha.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JogoDaVelha />
  </StrictMode>,
)
