import React, { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RatingDialog from "./RatingDialog"

export default function SubmitButton(props) {

  const [completion, setCompletion] = useState(false);

  const handleClick = function () {


    // const URL = '/api/employees/3/tasks/5';
    // try {
    //   axios.patch(URL).then((response) => {
    //     console.log(response.data);
    //     setCompletion((prevCompletion) => true);
      
    //   });
    // } catch (error) { }
    // ;
    
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" type="button" onClick={handleClick} >Mark as Completed</Button>
      <RatingDialog />  
    </Stack>
  );
}