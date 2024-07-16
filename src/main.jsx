import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import routes from './component/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-6xl my-8 mx-auto'>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
