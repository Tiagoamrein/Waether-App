import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'

import Styles from './styles/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Styles/>
    <Home/>
  </React.StrictMode>,
)
