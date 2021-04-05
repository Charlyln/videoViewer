import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function MobileDropDown({ links, open, openDropDown }) {
  if (!open) {
    return ''
  }

  return (
    <div className={styles.mobile}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="bg-gray-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={openDropDown}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileDropDown
