import React from 'react'
import About from './About/About'
import Checkout from './Checkout/Checkout'
import { Outlet } from 'react-router-dom'
export default function Pages() {
  return (
    <div>
        <Outlet/>

    </div>
  )
}
