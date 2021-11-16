import React from 'react'
import TravelPost from './TravelPost'
import Navbar from './Navbar'

/**
 * COMPONENT
 */
export const Camera = props => {
  return (
    <div>
      <Navbar/>
    <h3> travel </h3>
    <p> a collection of my favorite photos </p>
    <div className = "container">
      <div className = "row">
        <TravelPost imgURL = {"../photos/tz/kubu.jpg"} alt={"tanzania"}/>
        <TravelPost imgURL = {"../photos/peru/rainbow-1.jpg"} alt={"peru"}/>
        <TravelPost imgURL = {"../photos/usa/wa-1.jpg"} alt={"washington"}/>
      </div>
      <div className = "row">
        <TravelPost imgURL = {"../photos/usa/bryce.jpg"} alt={"bryce"}/>
        <TravelPost imgURL = {"../photos/asia/singapore-1.jpg"} alt={"singapore"}/>
        <TravelPost imgURL = {"../photos/hawaii/hawaii-1.jpg"} alt={"hawaii"}/>
      </div>
      <div className = "row">
        <TravelPost imgURL = {"../photos/tulum/tulum-1.jpg"} alt={"tulum"}/>
        <TravelPost imgURL = {"../photos/europe/azores-1.jpg"} alt={"azores"}/>
        <TravelPost imgURL = {"../photos/europe/ams-1.jpg"} alt={"amsterdam"}/>
      </div>
      <div className = "row">
        <TravelPost imgURL = {"../photos/europe/london-1.jpg"} alt={"london"}/>
        <TravelPost imgURL = {"../photos/europe/berl-1.jpg"} alt={"berlin"}/>
        <TravelPost imgURL = {"../photos/asia/taiwan.jpg"} alt={"taiwan"}/>
      </div>
      <div className = "row">
        <TravelPost imgURL = {"../photos/usa/tahoe-1.jpg"} alt={"tahoe"}/>
        <TravelPost imgURL = {"../photos/europe/greece-1.jpg"} alt={"greece"}/>
        <TravelPost imgURL = {"../photos/usa/utah-1.jpg"} alt={"utah"}/>
      </div>
      <div className = "row">
        <TravelPost imgURL = {"../photos/asia/japan-1.jpg"} alt={"japan"}/>
        <TravelPost imgURL = {"../photos/usa/seattle-1.jpg"} alt={"seattle"}/>
      </div>
    </div>
    </div>
  )
}

export default Camera
