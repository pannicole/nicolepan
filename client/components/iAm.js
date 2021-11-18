import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
/**
 * COMPONENT
 */
export const IAm = (props) => {
  return (
    <Fade in={true} style={{ transitionDelay: "2000ms" }} timeout={600}>
      <Grid
        sx={{
          maxWidth: "300px",
          // marginTop: "30vh",
          flexWrap: "nowrap",
          backgroundColor: "white",
          color: "black",
          padding: "5px",
        }}
      >
        <h1 style={{ margin: "0px", fontSize: "2rem" }}>i am:</h1>
        <Grid style={{ marginLeft: "5vw", padding: "10px" }}>
          <p
            style={{
              margin: "5px",
              textAlign: "right",
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            a software engineer,
          </p>
          <p
            style={{
              margin: "5px",
              textAlign: "right",
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            lifestyle model,
          </p>
          <p
            style={{
              margin: "5px",
              textAlign: "right",
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            & artist.
          </p>
          <h1 style={{ margin: "0px", textAlign: "right", fontSize: "2rem"}}>
            welcome!
          </h1>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default IAm;
