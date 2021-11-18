import React from 'react'


/**
 * COMPONENT
 */
export const TravelPost = props => {
  return (
      <img style= {{minWidth: "300px", maxWidth: "30%", margin: "2px"}} src={`${props.imgURL}`} alt={`${props.alt}`} />
  )
}

export default TravelPost
