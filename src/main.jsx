import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import BooksDetails from './components/BooksDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books',
        element:<Books></Books>,
        loader:()=> fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:'book/:bookId',
        element:<BooksDetails></BooksDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
