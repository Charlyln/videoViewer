import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
