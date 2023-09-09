import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx';
import Home from './pages/Home/Home.tsx';
import PlayerSearch from './pages/PlayerSearch/PlayerSearch.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />
  },
  {
    path: "",
    element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <PlayerSearch />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg'>
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
