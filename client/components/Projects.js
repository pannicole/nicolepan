import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import useMediaQuery from "@mui/material/useMediaQuery";
/**
 * COMPONENT
 */
export const Projects = (props) => {
  const matches = useMediaQuery("(max-width:650px)");
  return (
    <Box>
      {matches ? <Navbar page={`projects`} /> : <> </>}
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>
        <Fade in={true} timeout={2000}>
          <Box sx={{ display: "flex", flexDirection: "column", margin: "5vw", marginRight: "10vw", flexGrow: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: matches ? "10vw" : "0px",
                }}
              >
                <a href="https://github.com/pannicole">
                  <img
                    src={"../photos/lav.png"}
                    alt={"lav"}
                    style={{ width: "200px"}}
                  />
                  <p style={{ margin: "0px" }}>github</p>
                </a>
              </div>
          </Box>
        </Fade>
        {matches ? <> </> : <Navbar page={`projects`} />}
      </Box>
    </Box>
  );
};

export default Projects;
