import React from 'react'
import logo from '/Users/jkileybob/Mod-4-Final-Project/wordup_frontend/src/components/NavBar/logo.png'
const Navbar = (props) => {
  // console.log(props)
  return (
    <div className="navbar">
    <a href={props.link}>
      <img
        src={logo}
        alt='logo'
         /></a>
    </div>
  )
}

export default Navbar
