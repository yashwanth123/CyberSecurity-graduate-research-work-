import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// GitHub Pages serves from a subpath (e.g. /repo-name/). HashRouter avoids blank-page routing bugs.
const isGitHubPages = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/'

if (isGitHubPages && !window.location.hash) {
  window.location.replace(`${window.location.pathname}${window.location.search}#/`)
}

const Router = isGitHubPages ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
