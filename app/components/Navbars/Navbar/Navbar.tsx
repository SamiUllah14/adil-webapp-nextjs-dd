import React from 'react'
import MainNavbar from '../MainNavbar/MainNavbar'
import NavHeader from '../NavHeader/NavHeader'
import ScrollingMessage from '../ScrollingMesaage/ScrollingMesaage'

const Navbar = () => {
  return (
    <div>
        <NavHeader/>
        <MainNavbar/>
        <ScrollingMessage/>

    </div>
  )
}

export default Navbar