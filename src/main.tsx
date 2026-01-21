import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css' // Usaremos style.css que ya existe

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
