import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <ul className={styles.ul}>
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

const links = [
  {
    path: '/',
    name: 'Home'
  },
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
