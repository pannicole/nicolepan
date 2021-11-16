import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Me = (props) => {
  return (
    <div id="page">
      <div style={{ display: "flex", flexDirection: "row", height: "96vh" }}>
        <div style={{ flex: 1 }}>
          <h3>I am:</h3>
          <h3>a software engineer,</h3>
          <h3>lifestyle model,</h3>
          <h3>& artist</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginRight: "70px",
            borderRight: "1px solid black",
            paddingRight: "10px"
          }}
        >
          <div id = "homeNav"
            style={{display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginTop: "50px"}}>
          <Link to="/camera">travel</Link>
          <Link to="/pen">pen</Link>
          <Link to="/lifestyle">lifestyle</Link>
          <Link to="/">me</Link>
          </div>
          <h1 style={{ fontSize: "60px", fontFamily: "gar", marginTop: "5px", marginBottom: "30px"}}>nicole pan</h1>
        </div>
      </div>
    </div>
  );
};

export default Me;
