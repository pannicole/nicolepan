import React from "react";
import ArtPost from "./ArtPost";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

/**
 * COMPONENT
 */
export const Pen = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh"}}>
      <Fade in = {true} timeout= {2000}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <h1 style={{ textAlign: "center", marginBottom: "10px", marginTop: "100px"}}>
              portfolio
            </h1>
            <p style={{ textAlign: "center" }}>
              <a href="https://www.instagram.com/_nicolepen/" id="ig">
                @_nicolepen
              </a>
            </p>
          </Box>


          <Box
            sx={{ flexGrow: 1 }}
            style={{ marginLeft: "5vw", marginRight: "5vw" }}
          >
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <ArtPost
                  imgURL={"../photos/art/art-1.jpg"}
                  alt={"mt. rainier, washington"}
                />
                <ArtPost
                  imgURL={"../photos/art/art-4.jpg"}
                  alt={"berry park, williamsburg"}
                />
                <ArtPost
                  imgURL={"../photos/art/art-7.jpg"}
                  alt={"sun and air, williamsburg"}
                />
              </Grid>

              <Grid item xs={4}>
                <ArtPost
                  imgURL={"../photos/art/art-2.jpg"}
                  alt={"unica sede, london"}
                />
                <ArtPost
                  imgURL={"../photos/art/art-5.jpg"}
                  alt={"lake tahoe, california"}
                />
                <ArtPost
                  imgURL={"../photos/art/art-8.jpg"}
                  alt={"bruges, belgium"}
                />
              </Grid>

              <Grid item xs={4}>
                <ArtPost
                  imgURL={"../photos/art/art-3.jpg"}
                  alt={"golden gate, san francisco"}
                />
                <ArtPost
                  imgURL={"../photos/art/art-6.jpg"}
                  alt={"oahu, hawaii"}
                />

                <ArtPost
                  imgURL={"../photos/art/art-9.jpg"}
                  alt={"cloisters, nyc"}
                />
              </Grid>

              <Grid item xs={6}>
                <ArtPost
                  imgURL={"../photos/art/art-10.jpg"}
                  alt={"westport, connecticut"}
                />
              </Grid>

              <Grid item xs={6}>
                <ArtPost imgURL={"../photos/art/art-11.jpg"} alt={"michigan"} />
              </Grid>
            </Grid>
          </Box>


        </Box>
        </Fade>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Pen;
