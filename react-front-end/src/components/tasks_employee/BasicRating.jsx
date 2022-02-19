import * as React from "react";
import { Box, Rating } from "@mui/material";

export default function BasicRating(props) {
 
  const rating = props.rating
    return (
      <Box sx={{ '& > legend': { mt: 2 }, }}>
        <Rating name="read-only" value={rating} readOnly />  
      </Box>
  );
}