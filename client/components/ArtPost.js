import React from 'react'
import Navbar from './Navbar'

/**
 * COMPONENT
 */
export const ArtPost = props => {
  return (
    <div style={{height: "40vh", flexGrow: 1, maxWidth: "90vw", margin: "5px",
    display: "flex", justifyContent:"center"}}>
      <img style= {{maxHeight: "100%", objectFit:"cover"}}src={`${props.imgURL}`} alt={`${props.alt}`} />
      </div>

  )
}

export default ArtPost
