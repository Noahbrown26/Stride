import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px"}, ml: { sm: "50px"} }} position="relative" p="20px">
        <Typography color="" fontWeight="600" fontSize="26px">
            Stride
        </Typography>
        <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "40px"}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="4">
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="" href="#exercises" sx={{ backgroundColor: "", padding: "10px"}}>
            Explore Exercises
        </Button>
        <Typography fontWeight="600" color="" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none'} }} fontSize="200px">
            Stride
        </Typography>
    </Box>
  )
}

export default HeroBanner

// import stride logo or other workout picture inside box
// add stride color to all color tags