import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LiveClock  from './liveClock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LiveClock />
  </StrictMode>,
)
