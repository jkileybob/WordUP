import React from 'react'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h2 className="navbar-header">
        <div className="content">{props.title}</div>
      </h2>
    </div>
  )
}

export default Navbar
