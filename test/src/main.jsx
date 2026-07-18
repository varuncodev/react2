import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './components/Products.jsx';
import Home from './components/Home.jsx'
import SingleProducts from './components/SingleProducts.jsx'



let dataRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/Products',
        element:<Products/>
      },
      {
        path:'/Products/:id',
        element:<SingleProducts/>
      }
    ]

  }

])

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={dataRouter}/>
   
   </>
)
