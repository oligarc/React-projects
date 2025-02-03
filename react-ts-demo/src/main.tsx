import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render( //The ! mark tells that the previous expresion could never be undefined or null
  <StrictMode>
    <App />
  </StrictMode>,
)
