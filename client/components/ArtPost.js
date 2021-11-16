import React from 'react'
import Navbar from './Navbar'

/**
 * COMPONENT
 */
export const ArtPost = props => {
  return (
    <div style={{height: "20vw", margin: "5px", marginTop: "0px"}}>
      <img style= {{height: "100%"}}src={`${props.imgURL}`} alt={`${props.alt}`} />
    </div>
  )
}

export default ArtPost
