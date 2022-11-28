import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import List from './App'



createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <List /> 
  </React.StrictMode>
)
