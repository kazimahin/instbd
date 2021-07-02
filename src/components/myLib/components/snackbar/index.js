 


import React from 'react';
 import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}




export  function MSnackbar(props) {
    const [open, setOpen] = React.useState(true);

 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };



  return (

 
    
    
    <Snackbar 
    

        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
          
    >
        <Alert onClose={handleClose} severity={props.catagory?props.catagory:"success"}>
          {props.children}
        </Alert>


    </Snackbar>
    
      
   );
}



 