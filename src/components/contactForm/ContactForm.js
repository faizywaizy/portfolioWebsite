import * as React from 'react';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import gmail from '../../images/social/gmail.png';
import emailjs from '@emailjs/browser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide() {


  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const [message, setMessage] = React.useState("");

  const onEmailChange = (e) => setEmail(e.target.value);

  const onMessageChange = (f) => setMessage(f.target.value);

  const handleClickOpen = () => {setOpen(true);};

  const TEMPLATE_PARAMS = { 
    to_name: email, 
    message: message
  }
  

  const handleClose = () => {
    console.log(email, message);

    emailjs.send('service_9n9w584', 'template_qf04mze', TEMPLATE_PARAMS, 'DIjZ8SKTRb3D9OsvX')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });



    setOpen(false);
  };

  return (
    <div>
      <Button 
        onClick={handleClickOpen}>
        <img src={gmail} alt="Gmail Logo" width="200px" />
      </Button>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanks for reaching out!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={onEmailChange}
              value={email}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Message"
              type="message"
              fullWidth
              variant="standard"
              onChange={onMessageChange}
              value={message}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}