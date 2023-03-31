import React from 'react'
import ReactDOM from 'react-dom/client'
import KyriaApp from './KyriaApp'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <KyriaApp />
    </BrowserRouter>
  </React.StrictMode>
)