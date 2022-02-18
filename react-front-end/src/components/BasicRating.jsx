import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(props) {
  // const [value, setValue] = React.useState(2);
const rating = props.rating
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={rating} readOnly />  
    </Box>
  );
}