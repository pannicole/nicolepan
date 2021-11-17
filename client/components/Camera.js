import React from "react";
import TravelPost from "./TravelPost";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * COMPONENT
 */
export const Camera = (props) => {
  const matches = useMediaQuery('(max-width:650px)');
  return (
    <Box>
      {matches? (<Navbar page = {'travel'}/>) : (<> </>) }
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>

        <Fade in = {true} timeout= {2000}>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1, margin: "10vw", marginRight: "15vw" }}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TravelPost imgURL={"../photos/tz/kubu.jpg"} alt={"tanzania"} />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/peru/rainbow-1.jpg"}
                    alt={"peru"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/usa/wa-1.jpg"}
                    alt={"washington"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost imgURL={"../photos/usa/bryce.jpg"} alt={"bryce"} />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/asia/singapore-1.jpg"}
                    alt={"singapore"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/hawaii/hawaii-1.jpg"}
                    alt={"hawaii"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/tulum/tulum-1.jpg"}
                    alt={"tulum"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/europe/azores-1.jpg"}
                    alt={"azores"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/europe/ams-1.jpg"}
                    alt={"amsterdam"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/europe/london-1.jpg"}
                    alt={"london"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/europe/berl-1.jpg"}
                    alt={"berlin"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/asia/taiwan.jpg"}
                    alt={"taiwan"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/usa/tahoe-1.jpg"}
                    alt={"tahoe"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/europe/greece-1.jpg"}
                    alt={"greece"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost imgURL={"../photos/usa/utah-1.jpg"} alt={"utah"} />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/asia/japan-1.jpg"}
                    alt={"japan"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TravelPost
                    imgURL={"../photos/usa/seattle-1.jpg"}
                    alt={"seattle"}
                  />
                </Grid>
              </Grid>
            </Box>
        </Fade>
        {(matches) ? (<> </>) : (
        <Navbar page = {'travel'}/>)}
      </Box>
    </Box>
  );
};

export default Camera;
