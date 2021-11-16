import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <Link to="/camera">Camera</Link>
      <Link to="/pen">Pen</Link>
      <Link to="/lifestyle">Lifestyle</Link>
      <Link to="/">Me</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
