import React from 'react'
import ArtPost from './ArtPost'
import Navbar from './Navbar'

/**
 * COMPONENT
 */
export const Pen = props => {
  return (
    <div>
      <Navbar />
    <h3> portfolio </h3>
    <p>  <a href="https://www.instagram.com/_nicolepen/" id = "ig"> @_nicolepen </a>  </p>
    <div className = "artContainer">
      <div className = "artRow">
        <ArtPost imgURL = {"../photos/art/art-1.jpg"} alt={"mt. rainier, washington"}/>
        <ArtPost imgURL = {"../photos/art/art-2.jpg"} alt={"unica sede, london"}/>
        <ArtPost imgURL = {"../photos/art/art-3.jpg"} alt={"golden gate, san francisco"}/>
      </div>

      <div className = "artRow">
        <ArtPost imgURL = {"../photos/art/art-4.jpg"} alt={"berry park, williamsburg"}/>
        <ArtPost imgURL = {"../photos/art/art-5.jpg"} alt={"lake tahoe, california"}/>
        <ArtPost imgURL = {"../photos/art/art-6.jpg"} alt={"oahu, hawaii"}/>
      </div>

      <div className = "artRow">
        <ArtPost imgURL = {"../photos/art/art-7.jpg"} alt={"sun and air, williamsburg"}/>
        <ArtPost imgURL = {"../photos/art/art-8.jpg"} alt={"bruges, belgium"}/>
        <ArtPost imgURL = {"../photos/art/art-9.jpg"} alt={"cloisters, nyc"}/>
      </div>

      <div className = "artRow">
        <ArtPost imgURL = {"../photos/art/art-10.jpg"} alt={"westport, connecticut"}/>
        <ArtPost imgURL = {"../photos/art/art-11.jpg"} alt={"michigan"}/>
      </div>
    </div>
    </div>
  )
}

export default Pen
