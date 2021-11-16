import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <h1>nicole pan</h1> */}
    <nav>
      <Link to="/camera">Camera</Link>
      <Link to="/pen">Pen</Link>
      <Link to="/face">Face</Link>
      <Link to="/">Me</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
