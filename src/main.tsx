import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Tutorial from './components/Tutorial.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tutorial />
  </StrictMode>,
)
