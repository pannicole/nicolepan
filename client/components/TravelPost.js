import React from 'react'


/**
 * COMPONENT
 */
export const TravelPost = props => {
  return (
    <div style={{flex: 1, marginLeft: "4px"}}>
      <img style= {{width: "100%"}}src={`${props.imgURL}`} alt={`${props.alt}`} />
    </div>
  )
}

export default TravelPost