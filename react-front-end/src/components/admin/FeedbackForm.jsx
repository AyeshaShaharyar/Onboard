import React, { useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RateReviewIcon from "@mui/icons-material/RateReview";
import emailjs from "@emailjs/browser";


export default function FormDialog(props) {
  
  const [open, setOpen] = React.useState(false);
  const {visible} = props;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbvkzkw",
        "feedback_form",
        form.current,
        "user_sMWGwfnyCV7XrblY1HWIi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setOpen(false);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    <RateReviewIcon sx={{color:'#263238'}} align='center' onClick={handleClickOpen} />
      {/* <Button variant="outlined" onClick=>
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback</DialogTitle>
        <form ref={form} >
        <DialogContent>
          <DialogContentText>
            Provide feedback to the employee.
          </DialogContentText>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="email"
            name="message"
            fullWidth
            variant="standard"
          />
               {/* <textarea name="message" />
      <input type="submit" value="Send" /> */}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        {/* <input type="submit" value="Send"  />  */}
          <Button type="submit" value="Send"  onClick={sendEmail}>Send</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

