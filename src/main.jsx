import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </HashRouter>
)
