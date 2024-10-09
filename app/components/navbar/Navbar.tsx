import React from 'react'
import Logo from './Logo'
import Searche from './Searche'
import CardCount from './CardCount'
import User from './User'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-600 text-slate-100'>
        <Logo/>
        <Searche/>
        <CardCount/>
        <User/>
        <Hamburger/>
    </div>
  )
}

export default Navbar