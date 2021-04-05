import React from 'react'

function Button({ name, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className=" hover:text-gray-300 hover:bg-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium my-5 mx-5"
    >
      {name}
    </button>
  )
}

export default Button
