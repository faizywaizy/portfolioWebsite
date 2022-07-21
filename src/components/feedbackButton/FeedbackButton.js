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

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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

  const [email, setEmail] = React.useState("");

  const onMessageChange = (f) => setMessage(f.target.value);

  const onEmailChange = (e) => setEmail(e.target.value);

  const handleClickOpen = () => {setOpen(true);};

  const handleSubmit = async (e) => {
    if (e === ''){
      setOpen(false);
    } else {
      try {
        await addDoc(collection(db, 'feedback'), {
          email: email,
          feedback: message,
          rating: value,
          submitted: Timestamp.now()
        })
        
      } catch (err) {
        alert(err)
      }
    }

  }

  const handleClose = () => {
    //submit message
    handleSubmit(message);

    // close dialog box
    setOpen(false);

    //open alert success
    setAlertOpen(true);

  };

  // for the alert bar 

  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
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
            optional
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={onEmailChange}
            value={email}
            helperText="Only submit if you're comfortable with me reaching out for more details!"
          />
        </DialogContentText>

        <DialogContentText id="alert-dialog-slide-description">
          <TextField
            autoFocus
            required
            margin="dense"
            id="outlined-required"
            label="Feedback"
            fullWidth
            variant="standard"
            onChange={onMessageChange}
            value={message}
            autoComplete="off"
          />
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button 
          onClick={handleClose}>Submit
          </Button>
      </DialogActions>
    </Dialog>

    <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
      <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
        Your feedback directly improves this website's experience.
      </Alert>
    </Snackbar>

  </div>
  )
}

export default FeedbackButton
