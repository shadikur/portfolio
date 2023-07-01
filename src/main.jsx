import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      errorElement: <p>Error!</p>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </RouterProvider>,
)
