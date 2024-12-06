import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Slide from '../src/component/slide.jsx'
import Main from '../src/component/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className="imp">
    <Slide />
    <Main />
    </div>
    </>
  </StrictMode>,
)
