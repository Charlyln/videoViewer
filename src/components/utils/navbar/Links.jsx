import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function Links({ links }) {
  return (
    <div className={styles.links}>
      <div className="ml-auto">
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
  )
}

export default Links
