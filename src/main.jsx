import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from "./Router";



//criar rotas



ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={appRouter}/>
);
