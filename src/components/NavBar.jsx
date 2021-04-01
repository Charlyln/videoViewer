import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Live</Link>
      </li>
      <li>
        <Link to="/">Funzone</Link>
      </li>
      <li>
        <Link to="/">Testimonials</Link>
      </li>
    </ul>
  )
}

export default NavBar
