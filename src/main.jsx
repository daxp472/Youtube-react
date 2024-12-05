import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Slide from '../src/component/slide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slide />
  </StrictMode>,
)
