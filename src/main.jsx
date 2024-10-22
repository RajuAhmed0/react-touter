import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routeBrower = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/home',
        element: <div>THis is Home</div>
      },
      {
        path:'/about',
        element:<div>THis is About</div>
      },
      {
        path:'/post',
        element: <div>THis is Post</div>
      },
      {
        path:'/users',
        element: <div>THis is Users</div>
      },
      {
        path:'/contact',
        element: <div>THis is Contact</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routeBrower}/>
  </StrictMode>,
)
