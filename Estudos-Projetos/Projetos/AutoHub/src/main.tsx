import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./App.tsx";
import AuthProvider from './contexts/AuthContext.tsx';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {register} from 'swiper/element/bundle'
register();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    pauseOnHover
    />
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
