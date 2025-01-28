import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import NavHeader from './dashboard/dashboard.jsx'
import AvoidPropDrilling from './usercontext/userContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { lazy, Suspense } from 'react'
import { Shimmer } from './shimmer/shimmer.jsx'

const NavHeader = lazy(()=> import("./dashboard/dashboard.jsx"))//importing component using lazy loading.

const appRouter = createBrowserRouter([
  { 
    path: '/',
    element:  <App />,  
  },
  { 
    path: '/dashboard',
    element: <Suspense fallback={<Shimmer />}>
              {/* Using lazy and suspense we can use fallback so shimmer we can set */}
              <NavHeader />
             </Suspense>,  
  },
  {
    path: '/home',
    element: <App />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* //Now using AvoidPropDrilling component we can pass required props from parent to all component */}
    <AvoidPropDrilling>
      <RouterProvider router={appRouter}></RouterProvider>
    </AvoidPropDrilling>
  </React.StrictMode>)