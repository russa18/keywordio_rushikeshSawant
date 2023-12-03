import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './components/Dashboard.jsx'
import { CreateAd } from './components/CreateAd.jsx'
import Layout from './Layout.jsx'
import CreateAdTypeForm from './components/CreateAdTypeForm.jsx'


const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "create-ad",
        element: <CreateAd />,
      },
      {
        path: "create-ad/:formType",
        element: <CreateAdTypeForm />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
)
