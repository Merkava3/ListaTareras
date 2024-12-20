import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { AllApp } from './components/AllApp'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AllApp />
  </React.StrictMode>,
)
