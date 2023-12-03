import React from 'react'
import DrawerAppBar from "./components/DrawerAppBar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    
    <>
    <DrawerAppBar/>
    <Outlet/>

    </>
  )
}

export default Layout