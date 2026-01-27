import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./App.tsx"
import { RouterProvider } from "react-router-dom"
import './index.css'

import CartProvider from './context/CartContext.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Toaster
      position="bottom-center"
      reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
