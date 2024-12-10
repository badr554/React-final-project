import React, { Fragment } from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'   

export default function Layout() {
  return (
    <Fragment>
  <NavBar/>
  <Outlet/>
  <Footer/> 
    </Fragment>
  )
}
