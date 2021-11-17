import React from 'react'

import Navbar from './components/Navbar'
import { Link, animateScroll as scroll } from "react-scroll";
import Me from './components/Me';
import Pen from './components/Pen';
import Camera from './components/Camera';
import Face from './components/Face';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Me
          title="home"
          subtitle={"dummy"}
          dark={false}
          id="home"
        />
        <Pen
          title="art"
          subtitle={"dummy"}
          dark={false}
          id="art"
        />
        <Camera
          title="travel"
          subtitle={"dummy"}
          dark={false}
          id="travel"
        />
        <Face
          title="lifestyle"
          subtitle={"dummy"}
          dark={false}
          id="lifestyle"
        />
        <Projects
          title="projects"
          subtitle={"dummy"}
          dark={true}
          id="projects"
        />
      {/* <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="lifestyle">lifestyle</Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/projects">projects</Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="travel">travel</Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="art">art</Link>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/">home</Link> */}
    </div>
  )
}

export default App
