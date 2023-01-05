import { ThemeProvider, Preflight } from '@xstyled/styled-components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import * as Cases from './routes/Cases'
import * as Root from './routes/Root'
import theme from './theme'
import './main.css'

const router = createBrowserRouter([Root, Cases])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Preflight />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
