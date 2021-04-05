import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo/play.png'

function MobileDropDown({ openDropDown, open }) {
  const handleClick = () => {
    if (open) {
      openDropDown()
    }
  }

  return (
    <div className="">
      <Link to="/" onClick={handleClick}>
        <img className="h-8 " src={logo} alt="player" />
      </Link>
    </div>
  )
}

export default MobileDropDown
