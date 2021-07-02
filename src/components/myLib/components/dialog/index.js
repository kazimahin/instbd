import React from 'react';
 import Dialog from '@material-ui/core/Dialog';
 import DialogContent from '@material-ui/core/DialogContent';
 import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
 import CloseIcon from '@material-ui/icons/Close';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

 
export  function MDialog(props) {






  const style = makeStyles(theme=>({
    Dialog:{
 

      height:"100vh",
      width:"100%",
   
     "& .MuiDialog-paperWidthSm":{

      width:props.width&&`${props.width}%` ,
      height:props.height&&`${props.height}vh` ,

      minHeight:"200px",
      minWidth:"400px",

      maxHeight:"80vh",
      maxWidth:"80%",
        [theme.breakpoints.down('sm')]: {
         minWidth:(props.title)?"100%":"300px",
         minHeight:(props.title)?"100vh":"150px",

         maxWidth:(props.title)?"100%":"80%",
         maxHeight:(props.title)?"100vh":"60vh",
        },

     }
    },
    DialogContent:{
      height:"auto",
      width:"auto",
      overflowx:"scroll",
      [theme.breakpoints.down('sm')]: {
          
      },
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      position:'absolute'
    },
    title: {
       
      margin:"0 auto",
      padding:"0px 50px"
    },
}))
 







  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
 

  const handleClose = () => {
    setOpen(false);
  };

  const classes = style()
  return (
    <div>
 



      
      <Dialog 
         open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.Dialog}
zz
      >
        {
          (props.title)&&
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} onClick={handleClose} color="inherit" aria-label="menu">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} noWrap>
                {props.title}
                </Typography>
              </Toolbar>
            </AppBar>
        }
        

        <DialogContent className={classes.DialogContent}>

          {props.children}

        </DialogContent>

        
      </Dialog>
    </div>
  );
}
