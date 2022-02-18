import React, { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};
export default function RatingDialog(props) {
  const id = props.id;
  
  const [completion, setCompletion] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    const test = { rating: value }
    
    const URL = `/api/employees/3/tasks/${id}`;
    try {
     axios.patch(URL,test)
      .then((response) => {
        setCompletion((prevCompletion) => true);
      });
    } catch (error) { }
    ;
    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
       {props.completion ?  
      <Button variant="contained" color="success">Completed </Button> 
      :
      <Button variant="contained" color="info" onClick={handleClickOpen}> Mark as Completed </Button>
       } 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rating</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rate this task
          </DialogContentText>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
