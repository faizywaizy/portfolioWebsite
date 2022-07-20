import React, { useState } from 'react'
import './FeedbackButton.css'
import FeedbackIcon from '@mui/icons-material/Feedback';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const labels = {
  1: 'Sucked',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const FeedbackButton = () => {
  // For the rating bar
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  // for the message bar 
  const [open, setOpen] = React.useState(false);

  const [message, setMessage] = React.useState("");

  const onMessageChange = (f) => setMessage(f.target.value);

  const handleClickOpen = () => {setOpen(true);};

  const TEMPLATE_PARAMS = { 
    feedbackValue: value, 
    message: message
  }

  const handleClose = () => {
    console.log(value, message);
    setOpen(false);
  };

  return (
    <div>
      <button
        className={'feedbackButton'}
        title="Leave some feedback"
        onClick={handleClickOpen}
      >
        <FeedbackIcon />  
    </button>
    
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"How do you feel about this page?"}</DialogTitle>
      <DialogContent>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <DialogContentText id="alert-dialog-slide-description">
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Feedback"
            type="feedback"
            fullWidth
            variant="standard"
            onChange={onMessageChange}
            value={message}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default FeedbackButton
