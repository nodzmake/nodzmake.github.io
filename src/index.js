import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Routes'
import './index.css'


  // ╭────────────────────────────────────────────────────────────────╮
  // │                                                                │
  // │      New major version of npm available! 6.14.6 → 10.2.0       │
  // │   Changelog: https://github.com/npm/cli/releases/tag/v10.2.0   │
  // │               Run npm install -g npm to update!                │
  // │                                                                │
  // ╰────────────────────────────────────────────────────────────────╯

import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './components/Devs/Navigator'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigator />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
