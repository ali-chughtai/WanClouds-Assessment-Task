import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes } from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={Routes}/>
    </Provider>
  </StrictMode>,
    )
