import React, { useState } from 'react'
import Logo from './Logo'
import MobileMenuIcon from './MobileMenuIcon'
import MobileDropDown from './MobileDropDown'
import Links from './Links'

function NavBar() {
  const [open, setOpen] = useState(false)

  const openDropDown = () => {
    setOpen(!open)
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Logo open={open} openDropDown={openDropDown} />
            <Links links={links} />
            <MobileMenuIcon openDropDown={openDropDown} />
          </div>
        </div>
      </div>
      <MobileDropDown open={open} links={links} openDropDown={openDropDown} />
    </nav>
  )
}

const links = [
  {
    path: '/live',
    name: 'Live'
  },
  {
    path: '/funzone',
    name: 'Funzone'
  },
  {
    path: '/testimonials',
    name: 'Testimonials'
  }
]

export default NavBar
