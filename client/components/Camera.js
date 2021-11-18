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
      {matches? (
          <Navbar page = {'travel'}/>
        ) : (<> </>) }
      <Box sx={{ display: "flex", flexDirection: "row", height: "96vh" }}>
        <Fade in = {true} timeout= {2000}>
          <Box sx={{ flex: 1, margin: "5vw", marginRight: "15vw"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: (matches) ? "10vw" : "0px"}}>
                  <TravelPost imgURL={"../photos/tz/kubu.jpg"} alt={"tanzania"} />
                  <TravelPost
                    imgURL={"../photos/peru/rainbow-1.jpg"}
                    alt={"peru"}
                  />
                  <TravelPost
                    imgURL={"../photos/usa/wa-1.jpg"}
                    alt={"washington"}
                  />
                  <TravelPost imgURL={"../photos/usa/bryce.jpg"} alt={"bryce"} />
                  <TravelPost
                    imgURL={"../photos/asia/singapore-1.jpg"}
                    alt={"singapore"}
                  />
                  <TravelPost
                    imgURL={"../photos/hawaii/hawaii-1.jpg"}
                    alt={"hawaii"}
                  />
                  <TravelPost
                    imgURL={"../photos/tulum/tulum-1.jpg"}
                    alt={"tulum"}
                  />
                  <TravelPost
                    imgURL={"../photos/europe/azores-1.jpg"}
                    alt={"azores"}
                  />
                  <TravelPost
                    imgURL={"../photos/europe/ams-1.jpg"}
                    alt={"amsterdam"}
                  />
                  <TravelPost
                    imgURL={"../photos/europe/london-1.jpg"}
                    alt={"london"}
                  />
                  <TravelPost
                    imgURL={"../photos/europe/berl-1.jpg"}
                    alt={"berlin"}
                  />
                  <TravelPost
                    imgURL={"../photos/asia/taiwan.jpg"}
                    alt={"taiwan"}
                  />
                  <TravelPost
                    imgURL={"../photos/usa/tahoe-1.jpg"}
                    alt={"tahoe"}
                  />
                  <TravelPost
                    imgURL={"../photos/europe/greece-1.jpg"}
                    alt={"greece"}
                  />
                  <TravelPost imgURL={"../photos/usa/utah-1.jpg"} alt={"utah"} />
                  <TravelPost
                    imgURL={"../photos/asia/japan-1.jpg"}
                    alt={"japan"}
                  />
                  <TravelPost
                    imgURL={"../photos/usa/seattle-1.jpg"}
                    alt={"seattle"}
                  />
                  </div>
            </Box>
        </Fade>
        {(matches) ? (<> </>) : (
        <Navbar page = {'travel'}/>)}
      </Box>
    </Box>
  );
};

export default Camera;
