import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './Components/Users/Users.jsx'
import UsersDetails from './Components/UserCard/UsersDetails.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Post from './Components/ErrorPage/Posts/Post.jsx'
import Home from './Components/Home/Home.jsx'
import PostRead from './Components/ErrorPage/Posts/PostRead.jsx'


const routeBrower = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<div>THis is About</div>
      },
      {
        path:'/post',
        element: <Post></Post>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element: <PostRead></PostRead>,
     
      },
      {
        path:'/users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        
      },
      {
        path:'users/:userId',
        element: <UsersDetails></UsersDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        
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
