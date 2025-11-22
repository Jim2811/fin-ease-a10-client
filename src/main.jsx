import { BrowserRouter } from "react-router";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { StrictMode } from "react";
import './App.css'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
