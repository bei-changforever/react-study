import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import ReactHooks from './view/react_hooks.tsx'
import Demo_01 from './demo/demo_01.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Demo_01 />
  </StrictMode>,
)
