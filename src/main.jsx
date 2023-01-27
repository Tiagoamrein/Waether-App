import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Global from './styles/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <Home/>
  </React.StrictMode>,
)
