import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'

import {ThemeProvider} from './Context/Theme'
import { GlobalProvider } from './Context/GlobalVariable'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </StrictMode>,
)
