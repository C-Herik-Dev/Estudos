import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Layout } from './components/layout'
import { Details } from './pages/details'

import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
      element: <Home/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "details/:id",
        element: <Details/>
      }
    ]
  }
])

export { router }