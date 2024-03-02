import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import {Linktree} from "./pages/Linktree";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/ways',
        element: <Linktree />,
    }
])

setTimeout(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>,
    )
}, 2120)
