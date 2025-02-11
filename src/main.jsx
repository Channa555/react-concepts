import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import NavHeader from './dashboard/dashboard.jsx'
import store from './store/store.jsx'
import AvoidPropDrilling from './usercontext/userContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { lazy, Suspense } from 'react'
import { Shimmer } from './shimmer/shimmer.jsx'
import { Provider } from "react-redux";

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
    {/* We are passing these store values to be availble in globe component */}
    <Provider store={store}> 
        {/* //Now using AvoidPropDrilling component we can pass required props from parent to all component */}
      <AvoidPropDrilling>
        <RouterProvider router={appRouter}></RouterProvider>
      </AvoidPropDrilling>
    </Provider>
  </React.StrictMode>)